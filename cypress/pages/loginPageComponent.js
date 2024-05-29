
export default class LoginPageComponents {

    locators = {
        button: {
            login: "//button[text()='Login']",
            restPassword: "//button[text()='Reset Password']",
            closeToastMessage: '.MuiAlert-action > .MuiButtonBase-root'
        },
        textField: {
            email: "//label[text()='Email ID']/..//input",
            password: "//label[text()='Password']/..//input",
            toastMessage: "//div[contains(@class,'MuiAlert-message')]",
            emailValidation: "//label[text()='Email ID']/..//p/span",
            passwordValidation: "//label[text()='Password']/..//p/span"
        },
        link: {
            forgotPassword: "//a[text()='Forgot password?']"
        }
    }

    fillLoginCredentials(email, password) {
        cy.xpath(this.locators.textField.email).type(email);
        cy.xpath(this.locators.textField.password).type(password);
        cy.xpath(this.locators.button.login).click();
    }

    verifyToastMessage(expectedText) {
        cy.textfieldValidation(this.locators.textField.toastMessage, expectedText);
        cy.get(this.locators.button.closeToastMessage).click();
    }

    enterEmailAndPassword(email, password) {
        if (!email && !password) {
            cy.xpath(this.locators.textField.email).type("passing null value");
            cy.xpath(this.locators.textField.email).clear();
            cy.xpath(this.locators.textField.emailValidation).invoke('text').then((text) => {
                this.actualText = text.trim();
            });
        } else if (!password) {
            cy.xpath(this.locators.textField.email).clear();
            cy.xpath(this.locators.textField.email).type(email);
            cy.xpath(this.locators.textField.emailValidation).invoke('text').then((text) => {
                this.actualText = text.trim();
            });

        } else {
            cy.xpath(this.locators.textField.password).type(password);
            cy.xpath(this.locators.textField.password).clear();
            cy.xpath(this.locators.textField.passwordValidation).invoke('text').then((text) => {
                this.actualText = text.trim();
            })
        }
    }

    validateTextMessage(expectedText) {
        try {
            expect(this.actualText).to.equal(expectedText);
        } catch (error) {
            expect(this.actualText).to.equal(expectedText);
        }
    }

    clickForgotPassword(email) {
        cy.xpath(this.locators.link.forgotPassword).click();
        cy.xpath(this.locators.textField.email).click();
        cy.xpath(this.locators.textField.email).type(email);
    }

    textValidation(expectedText) {
        cy.textfieldValidation(this.locators.textField.emailValidation, expectedText);
    }

    clickOnReset() {
        cy.xpath(this.locators.button.restPassword).click();
    }

}
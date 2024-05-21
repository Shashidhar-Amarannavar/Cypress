
export default class LoginPageComponents {

    

    locators = {
        button: {
            login: "//button[text()='Login']",
            restPassword: "//button[text()='Reset Password']"
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
        cy.xpath(this.locators.textField.password).type(password)
        cy.xpath(this.locators.button.login).click()
    }

    verifyToastMessage(expectedText) {
        cy.xpath(this.locators.textField.toastMessage).should('have.text', expectedText);
    }

    enterEmailAndPassword(email, password) {
        if (!email && !password) {
            cy.xpath(this.locators.textField.email).type("passing null value")
            cy.xpath(this.locators.textField.email).clear();
            cy.xpath(this.locators.textField.emailValidation).then((text) => {
                this.actualText = text.text();
            })
        } else if (!password) {
            cy.xpath(this.locators.textField.email).clear();
            cy.xpath(this.locators.textField.email).type(email);
            cy.xpath(this.locators.textField.emailValidation).then((text) => {
                this.actualText = text.text();
            })

        } else {
            cy.xpath(this.locators.textField.password).type(password);
            cy.xpath(this.locators.textField.password).clear();
            cy.xpath(this.locators.textField.passwordValidation).then((text) => {
                this.actualText = text.text();
            })
        }
    }

    validateTextMessage(expectedText) {
        try {
            // cy.xpath(this.locators.textField.emailValidation).contains(expectedText);
            expect(this.actualText).contain(expectedText)
        } catch (error) {
            // cy.xpath(this.locators.textField.passwordValidation).contains(expectedText);
            expect(this.actualText).contain(expectedText)
            // cy.get('#password-helper-text > span').contains(expectedText)
        }
    }
}
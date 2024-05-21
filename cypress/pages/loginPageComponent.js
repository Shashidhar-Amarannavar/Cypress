
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

    async loginToApp(email, password) {
        cy.xpath(this.locators.textField.email).type(email);
        cy.xpath(this.locators.textField.password).type(password)
        cy.xpath(this.locators.button.login).click()
    }

    async loginToApplication() {
        cy.xpath(this.locators.textField.email).type();
        cy.xpath(this.locators.textField.password).type()
        cy.xpath(this.locators.button.login).click()
    }

     verifyToastMessage(expectedText) {
        cy.xpath(this.locators.textField.toastMessage).should('have.text', expectedText);
    }
}
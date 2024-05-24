
import { faker } from '@faker-js/faker'

let firstName;
let lastName;

export default class LoginPageComponents {


    locators = {
        button: {
            signUp: "//button[text()='Sign up']"
        },
        textField: {
            emailId: '//input[@name="email"]',
            firstName: "//label[text()='First name']/..//input",
            lastName: "//label[text()='Last name']/..//input",
            password: "//label[text()='Password']/..//input",
            confirmPassword: "//label[text()='Confirm password']/..//input",
        },
        validate: {
            email: "//label[text()='Email ID']/..//p/span",
            firstName: "//label[text()='First name']/..//p/span",
            lastname: "//label[text()='Last name']/..//p/span",
            password: "//label[text()='Password']/..//p/span",
            confirmPassword: "//label[text()='Confirm password']/..//p/span"

        },
        link: {
            signUp: "//a[text()='Sign up']"
        }
    }

    async signUpForm(email, passwords) {
        cy.log(email+" "+passwords)
        cy.xpath(this.locators.textField.emailId).type(firstName + lastName + email);
        cy.xpath(this.locators.textField.firstName).type(firstName);
        cy.xpath(this.locators.textField.lastName).type(lastName);
        cy.xpath(this.locators.textField.password).type(firstName + passwords);
        cy.xpath(this.locators.textField.confirmPassword).type(firstName + passwords);
    }

    async enterInvalidData(email, firstname, lastname, passwords) {
        cy.xpath(this.locators.textField.emailId).type(email);
        cy.xpath(this.locators.textField.firstName).type(firstname);
        cy.xpath(this.locators.textField.lastName).type(lastname);
        cy.xpath(this.locators.textField.password).type(passwords);
        cy.xpath(this.locators.textField.confirmPassword).type(passwords + "#123");
    }

    async clickOnSignup() {
            cy.xpath(this.locators.link.signUp).click();
            firstName = faker.person.firstName();
            lastName = faker.person.lastName();
    }

    clickOnSignupButton(){
        cy.xpath(this.locators.button.signUp).click();
    }

    async clearTextfields() {
        cy.xpath(this.locators.textField.emailId).clear();
        cy.xpath(this.locators.textField.firstName).clear();
        cy.xpath(this.locators.textField.lastName).clear();
        cy.xpath(this.locators.textField.password).clear();
        cy.xpath(this.locators.textField.confirmPassword).clear();


        // await this.waitForVisibility(this.locators.textField.emailId);
        // await this.clear(this.locators.textField.emailId);
        // await this.clear(this.locators.textField.firstName);
        // await this.clear(this.locators.textField.lastName);
        // await this.clear(this.locators.textField.password);
        // await this.clear(this.locators.textField.confirmPassword);
    }

    async validateMessage() {

        cy.xpath(this.locators.validate.email).contains('Please enter your email');
        cy.xpath(this.locators.validate.firstName).contains('Please enter your first name');
        cy.xpath(this.locators.validate.lastname).contains('Please enter your last name');
        cy.xpath(this.locators.validate.password).contains('Please enter your password');
        cy.xpath(this.locators.validate.confirmPassword).contains('Please enter your confirm password');

        // await expect(this.page.locator(this.locators.validate.email)).toHaveText("Please enter your email");
        // await expect(this.page.locator(this.locators.validate.firstName)).toHaveText("Please enter your first name");
        // await expect(this.page.locator(this.locators.validate.lastname)).toHaveText("Please enter your last name");
        // await expect(this.page.locator(this.locators.validate.password)).toHaveText("Please enter your password");
        // await expect(this.page.locator(this.locators.validate.confirmPassword)).toHaveText("Please enter your confirm password");
    }

    async invalidMessage() {
        cy.xpath(this.locators.validate.email).contains('Please enter a valid email address');
        cy.xpath(this.locators.validate.firstName).contains('Please enter valid first name');
        cy.xpath(this.locators.validate.lastname).contains('Please enter valid last name');
        cy.xpath(this.locators.validate.password).contains('The password should include minimum 8 characters, 1 uppercase, 1 special character, 1 number, 1 lowercase');
        cy.xpath(this.locators.validate.confirmPassword).contains('Confirm password should match with password');

        // await expect(this.page.locator(this.locators.validate.email)).toHaveText("Please enter a valid email address");
        // await expect(this.page.locator(this.locators.validate.firstName)).toHaveText("Please enter valid first name");
        // await expect(this.page.locator(this.locators.validate.lastname)).toHaveText("Please enter valid last name");
        // await expect(this.page.locator(this.locators.validate.password)).toHaveText("The password should include minimum 8 characters, 1 uppercase, 1 special character, 1 number, 1 lowercase");
        // await expect(this.page.locator(this.locators.validate.confirmPassword)).toHaveText("Confirm password should match with password");
    }
}
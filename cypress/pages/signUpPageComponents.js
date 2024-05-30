
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

    signUpForm(email, passwords) {
        cy.log(email + " " + passwords);
        cy.xpath(this.locators.textField.emailId).type(firstName + lastName + email);
        cy.xpath(this.locators.textField.firstName).type(firstName);
        cy.xpath(this.locators.textField.lastName).type(lastName);
        cy.xpath(this.locators.textField.password).type(firstName + passwords);
        cy.xpath(this.locators.textField.confirmPassword).type(firstName + passwords);
    }

    enterInvalidData(email, firstname, lastname, passwords) {
        cy.xpath(this.locators.textField.emailId).type(email);
        cy.xpath(this.locators.textField.firstName).type(firstname);
        cy.xpath(this.locators.textField.lastName).type(lastname);
        cy.xpath(this.locators.textField.password).type(passwords);
        cy.xpath(this.locators.textField.confirmPassword).type(passwords + "#123");
    }

    clickOnSignup() {
        cy.xpath(this.locators.link.signUp).click();
        firstName = faker.person.firstName();
        lastName = faker.person.lastName();
    }

    clickOnSignupButton() {
        cy.xpath(this.locators.button.signUp).click();
    }

    clearTextfields() {
        cy.xpath(this.locators.textField.emailId).clear();
        cy.xpath(this.locators.textField.firstName).clear();
        cy.xpath(this.locators.textField.lastName).clear();
        cy.xpath(this.locators.textField.password).clear();
        cy.xpath(this.locators.textField.confirmPassword).clear();
    }

    validateMessage() {
        cy.textfieldValidation(this.locators.validate.email, 'Please enter your email');
        cy.textfieldValidation(this.locators.validate.firstName, 'Please enter your first name');
        cy.textfieldValidation(this.locators.validate.lastname, 'Please enter your last name');
        cy.textfieldValidation(this.locators.validate.password, 'Please enter your password');
        cy.textfieldValidation(this.locators.validate.confirmPassword, 'Please enter your confirm password');
    }

    invalidMessage() {
        cy.textfieldValidation(this.locators.validate.email, 'Please enter a valid email address');
        cy.textfieldValidation(this.locators.validate.firstName, 'Please enter valid first name');
        cy.textfieldValidation(this.locators.validate.lastname, 'Please enter valid last name');
        cy.textfieldValidation(this.locators.validate.password, 'The password should include minimum 8 characters, 1 uppercase, 1 special character, 1 number, 1 lowercase');
        cy.textfieldValidation(this.locators.validate.confirmPassword, 'Confirm password should match with password');
    }
}
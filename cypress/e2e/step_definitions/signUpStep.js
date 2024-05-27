import {  When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPageComponents from '../../pages/signUpPageComponents';

let signUpPage = new LoginPageComponents();

When('user in lagin page and click on signUp', async function () {
    signUpPage.clickOnSignup();
});

When('fill all details with {string} and {string}', async function (email, password) {
    signUpPage.signUpForm(email, password);
});

When('click on signUp button', async function () {
    signUpPage.clickOnSignupButton();
});

When('navigate to back', async function () {
    cy.go("back")
});

When('remove values from all textbox', async function () {
    signUpPage.clearTextfields();
});

Then('Verify the all textbox validation message', async function () {
    signUpPage.validateMessage();
});

When("enter invalid {string},{string},{string},{string} and confirmPassword", async function (email, firstname, lastname, passwords) {
    signUpPage.enterInvalidData(email, firstname, lastname, passwords);
});

Then('Verify the invalid error message', async function () {
    signUpPage.invalidMessage();
});
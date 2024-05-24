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


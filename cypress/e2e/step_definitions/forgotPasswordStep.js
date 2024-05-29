import { When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPageComponents from '../../pages/loginPageComponent'

let forgotPasswordPage = new LoginPageComponents();

When('user click on the forgot password and enter {string}', async function (email) {
    forgotPasswordPage.clickForgotPassword(email);
});

Then('Verify the email textfield {string}', async function (textValidation) {
    forgotPasswordPage.textValidation(textValidation);
});

When('click on reset password', async function () {
    forgotPasswordPage.clickOnReset();
});
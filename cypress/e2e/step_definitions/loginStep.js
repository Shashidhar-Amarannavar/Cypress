import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPageComponents from '../../pages/loginPageComponent'

let login = new LoginPageComponents();
let testData;

before(() => {
  cy.fixture('test_data').then(function (user) {
    testData = user;
  })
})

Given('user in login screen', async function () {
  cy.visit(testData.app_url);
});

When('user enter the email and password', async function () {
  await login.loginToApp(testData.user_email, testData.user_password);
});

Then('Verify popup {string}', async function (expectedText) {
   login.verifyToastMessage(expectedText);
});
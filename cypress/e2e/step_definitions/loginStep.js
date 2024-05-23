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
   login.fillLoginCredentials(testData.user_email, testData.user_password);
});


When("user enter the {string} and {string}", async function (email, password) {
   login.fillLoginCredentials(email, password);
})

When("user enter the wrong {string} and {string}", async function (email, password) {
  login.enterEmailAndPassword(email, password)
})

Then("Verify the textbox {string}", async function (expectedText) {
  login.validateTextMessage(expectedText);
})

Then('Verify popup {string}', async function (expectedText) {
   login.verifyToastMessage(expectedText);
});
import { When } from "cypress-cucumber-preprocessor/steps"
import LoginPageComponents from '../../pages/organizationPageComponents'

let organizationScreen = new LoginPageComponents();
When('create new organization {string},{string} and {string}', async function (orgName, description, path) {
  organizationScreen.createNewOrg(orgName, description, path);

});

When('delete organization {string}', async function (orgName) {
  organizationScreen.deleteOrganization(orgName);

});

When('edit the organization {string},{string} and {string}', async function (oldName, newName, description) {
  organizationScreen.editOrganizationName(oldName, newName, description)
});

export default class organizationPageComponents {

    locators = {
        button: {
            createOrgButton: "//p[text()='+ Create New Organization']",
            createNewOrg: "//button[text()='Create a new Organization']",
            submit: '//button[@type="submit"]',
            Yes: "//button[@name='submitText']",
            switchOrgButton: '//header//button[@type="button"]',
            selectSecondOrg: '(//div[@role="presentation"]//div/div/p)[2]'
        },
        textField: {
            orgName: '//input[@name="name"]',
            orgDescription: '//textarea[@name="description"]',
            orgNameValidaton: '//label[text()="Organization Name *"]/..//p//span',
            descriptionValidaton: '//label[text()="Organization Description *"]/..//p//span',
            submitButton: '//button[@type="submit"]',
            uploadLogo: "//div[text()='Upload Logo']",
        },
        link: {
            forgotPassword: "//a[text()='Forgot password?']"
        }
    }

    createNewOrg(orgName, description, path) {
        try {
            cy.xpath(this.locators.button.createOrgButton).click();
        } catch (error) {
            cy.xpath(this.locators.button.createNewOrg).click();
        }
        cy.xpath(this.locators.textField.orgName).type(orgName);
        cy.xpath(this.locators.textField.orgDescription).type(description);
        if (path) {
            cy.xpath('//input[@type="file"]').attachFile(path);
        }
        cy.xpath(this.locators.button.submit).click();
    }

    editOrganizationName(oldName, newName, description) {
        cy.xpath(`//p[text()='${oldName}']/../../..//div//p[text()='Edit']`).click();
        cy.xpath(this.locators.textField.orgName).clear();
        cy.xpath(this.locators.textField.orgName).type(newName);
        cy.xpath(this.locators.textField.orgDescription).type(description);
        cy.xpath(this.locators.button.submit).click();
    }

    deleteOrganization(orgName) {
        cy.xpath("//p[text()='" + orgName + "']/../../..//div//p[text()='Delete']").click();
        cy.xpath(this.locators.button.Yes).click();
    }
}
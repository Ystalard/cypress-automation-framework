/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/"); 
        cy.xpath('//a[contains(@href, "contact") and starts-with(text(), "Con")]').click();
        cy.get('#ContactUsFrm_first_name').type("Jean");
        cy.get('#ContactUsFrm_email').type("Jean.Valjean@email.com");
        cy.get('#ContactUsFrm_enquiry').type("Do you provide international shipping?");
        cy.get('button[title="Submit"]').click();
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://automationteststore.com/"); 
        cy.xpath('//a[contains(@href, "contact") and starts-with(text(), "Con")]').click();
        cy.get('#ContactUsFrm_first_name').type("Jean");
        cy.get('#ContactUsFrm_email').type("JeanValjean"); 
        cy.get('#ContactUsFrm_enquiry').type("Do you provide international shipping?");
        cy.get('button[title="Submit"]').click();
        cy.xpath('//*[contains(text(), "E-Mail Address does not appear to be valid!")]')
     })
})  
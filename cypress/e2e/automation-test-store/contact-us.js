/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
       cy.visit("https://automationteststore.com/"); 
       cy.get('.info_links_footer > :nth-child(5) > a').click();
       cy.get('#ContactUsFrm_first_name').type("Jean");
       cy.get('#ContactUsFrm_email').type("Jean.Valjean@email.com");
       cy.get('#ContactUsFrm_enquiry').type("Do you provide international shipping?");
       cy.get('.col-md-6 > .btn').click();
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://automationteststore.com/"); 
       cy.get('.info_links_footer > :nth-child(5) > a').click();
       cy.get('#ContactUsFrm_first_name').type("Jean");
       cy.get('#ContactUsFrm_email').type("JeanValjean"); 
       cy.get('#ContactUsFrm_enquiry').type("Do you provide international shipping?");
       cy.get('.col-md-6 > .btn').click();
     })
})  
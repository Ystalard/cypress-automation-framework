/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(() => {
        cy.fixture('example').then(function(data){
            globalThis.data = data
        })
    });

    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get("#contact-us").invoke('removeAttr', 'target').click()
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'Contact-Us/contactus.html')
    });
    
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.SubmitContactUsForm_webdriveruni(Cypress.env('first_name'), data.last_name, data.email, data.description)        
        cy.get('h1').should('have.text',data.messageValidation)
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        
        cy.SubmitContactUsForm_webdriveruni(data.name, data.last_name, data.email, "")
        cy.get('body').should('include.text',data.messageErrorValidation)
    });
})
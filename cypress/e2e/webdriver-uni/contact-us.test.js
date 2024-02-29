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
        cy.get('[name="first_name"]').type(data.name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type(data.description)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text',data.messageValidation)
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        
        cy.get('[name="first_name"]').type(data.name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        
        cy.get('[type="submit"]').click()
        cy.get('body').should('include.text',data.messageErrorValidation)
    });
})
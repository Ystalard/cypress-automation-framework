/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("Jean")
        cy.get('[name="last_name"]').type("Valjean")
        cy.get('[name="email"]').type("Jean.Valjean@email.com")
        cy.get('textarea.feedback-input').type("I am a character from Les Miserables")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Jean")
        cy.get('[name="last_name"]').type("Valjean")
        cy.get('[name="email"]').type("Jean.Valjean@email.com")
        
        cy.get('[type="submit"]').click()
        cy.get('body').should('include.text','Error: all fields are required')
    });
})
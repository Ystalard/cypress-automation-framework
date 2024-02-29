/// <reference types="cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirms links redirect to the correct pages", () => {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl'))
        cy.get("#contact-us").invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Contact-Us/contactus.html')

        cy.go('back')
        cy.url().should('include', Cypress.env('webdriveruniversityBaseUrl'))
        cy.reload()
        cy.go('forward')
        cy.url().should('include', 'Contact-Us/contactus.html')

        cy.go('back')
        cy.get("#login-portal").invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Login-Portal')

        cy.go('back')

        cy.get("#to-do-list").invoke('removeAttr', 'target').click()
        cy.url().should('include', 'To-Do-List')

        cy.go('back')
        cy.url().should('include', Cypress.env('webdriveruniversityBaseUrl'))

    });
})
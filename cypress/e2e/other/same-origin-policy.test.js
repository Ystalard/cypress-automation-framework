/// <reference types="cypress" />

describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.visit("https://automationteststore.com/")
    });

    it.only("validate visiting two different domains via user action", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#automation-test-store").invoke("removeAttr", "target").click()
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
    });
})
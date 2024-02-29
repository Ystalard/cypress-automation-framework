/// <reference types="cypress" />

describe('Inspect Automation Test Store items using chain of commands', () => {
    it('Click on the first item using item text', () => {
        cy.visit(Cypress.env('automationTestStoreBaseUrl'))
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
            .then(function(itemHeaderText){
                console.log('Selected the following item: ' + itemHeaderText.text())
            })
    })
    it('Click on the first item using item index', () => {
        cy.visit(Cypress.env('automationTestStoreBaseUrl'))
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
})

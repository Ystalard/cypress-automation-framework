/// <reference types="cypress" />

describe('Iterate over elements', () => {
    it('Log information of all hair care products', () => {
        cy.visit(Cypress.env('automationTestStoreBaseUrl'))
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it('adds specific product to basket', () => {
        cy.visit(Cypress.env('automationTestStoreBaseUrl'))
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.selectProduct('Curls to straight Shampoo')
    });

    it('adds another specific product to basket', () => {
        cy.visit(Cypress.env('automationTestStoreBaseUrl'))
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.selectProduct('Seaweed Conditioner')
    });
})

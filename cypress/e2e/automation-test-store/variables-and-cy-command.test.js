/// <reference types="cypress" />

describe('Verifying variables, cypress commands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
        cy.visit("https://automationteststore.com/")
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // skincareLink.click()
        // makeupLink.click()
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
    })

    it('Navigation to specific product pages', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()

        //following code will fail
        // const header = cy.get('h1 .maintext')
        // cy.log(header.text())

        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    });
})

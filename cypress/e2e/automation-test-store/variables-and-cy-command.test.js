/// <reference types="cypress" />

describe('Verifying variables, cypress commands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
        cy.visit(Cypress.env('automationTestStoreBaseUrl'))
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // skincareLink.click()
        // makeupLink.click()
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
    })

    it('Navigation to specific product pages', () => {
        cy.visit(Cypress.env('automationTestStoreBaseUrl'))
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

    it('Validate properties of the Context Us Page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        
        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
    });
})

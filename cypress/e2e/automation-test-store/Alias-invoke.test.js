/// <reference types="cypress" />

describe('Alias and Invoke', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.get("#grid").click()
        cy.get(".thumbnails.grid .thumbnail").as("productThumbnailGrid")
    })

    it('Validate a specific hair care product', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })

    it('Validate product thumbnail count', () => {
        cy.get('@productThumbnailGrid').should('have.length', 4)
    })

    it('Validate a product can be added to cart', () => {
        cy.get('@productThumbnailGrid').each(($el, index, $list) => {
            cy.get($el).get('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
        })
    });
})

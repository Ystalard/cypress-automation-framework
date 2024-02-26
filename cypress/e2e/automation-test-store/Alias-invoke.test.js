/// <reference types="cypress" />

describe('Alias and Invoke', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Skincare').click()
        cy.get("#grid").click()
        cy.get(".thumbnails.grid .thumbnail").as("productThumbnailGrid")
    })

    it('Validate a specific skin care product', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Skincare').click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Flash Bronzer Body Gel')
    })

    it('Validate product thumbnail count', () => {
        cy.get('@productThumbnailGrid').should('have.length', 5)
    })

    it.only('Validate a product can be added to cart', () => {
        cy.get('@productThumbnailGrid').find('.productcart').each(($el, index, $list) => {
                    cy.wrap($el).invoke('attr', 'title').should('include', 'Add to Cart')
        })
    })

    it.only('Validate a product is out of stock', () => {
        cy.get('@productThumbnailGrid').find('.nostock').each($el => {
            cy.wrap($el).should('have.text', 'Out of Stock')
        })
    })
})

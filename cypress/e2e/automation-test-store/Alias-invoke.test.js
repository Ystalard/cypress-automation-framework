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

    it('Validate a product can be added to cart', () => {
        cy.get('@productThumbnailGrid').find('.productcart').each(($el, index, $list) => {
                    cy.wrap($el).invoke('attr', 'title').should('include', 'Add to Cart')
        })
    })

    it('Validate a product is out of stock', () => {
        cy.get('@productThumbnailGrid').find('.nostock').each($el => {
            cy.wrap($el).should('have.text', 'Out of Stock')
        })
    })

    it.only('Calculate total of normal and sale products', () => {
        cy.visit("https://automationteststore.com/");
        
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        
        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }

            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " + itemsPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPriceTotal = 0;
            var saleItemPrice = $linkText.split('$');
            var i;

            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPriceTotal += Number(saleItemPrice[i])
            }

            itemsTotal += saleItemsPriceTotal;
            cy.log("Sale price items total: " + saleItemsPriceTotal)
        })
        .then(() => { //this then is important to make sure the above code is executed before the below code. Otherwise itemsTotal will be 0
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.eq(660.5)
        })
    })
})

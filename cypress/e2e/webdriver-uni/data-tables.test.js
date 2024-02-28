/// <reference types="Cypress" />
describe("handling data via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    
    it('calculates and asserts the total age of all users', () => {
        var totalAge = 0
        cy.get('#thumbnail-1 > table > tbody > tr > td:last-child').each(($el) => {
            const age = $el.text()
            totalAge += Number(age)
        }).then(() => {
            expect(totalAge).to.eq(322)
        })
    });

    it('asserts the age of a user in the table', () => {
        cy.get('#thumbnail-1 > table > tbody > tr > td:contains("Woods")')
            .next()
            .should('contain', '80')
    });
});  
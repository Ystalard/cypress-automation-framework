describe('how to handle autocomplete ddl', () => {
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
    });

    it('selects the Avacado option', () => {
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > div').each(($el) => {
            if($el.text() === 'Avacado') {
                cy.wrap($el).click()
            }
        })
        cy.get('#submit-button').click()
        cy.url().should('include', 'Avacado')
    });
});
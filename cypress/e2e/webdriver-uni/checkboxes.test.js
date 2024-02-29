describe('how to handle checkboxes', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl'))
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it('checks of one checkboxes according to position', () => {
        cy.get('#radio-buttons > input[type=radio]').first().check().should('be.checked')
    });

    it('ticks one radiobutton at specific position', () => {
        cy.get('#radio-buttons > input[type=radio]').eq(1).check().should('be.checked')
    })

    it('checks multiple checkboxes', () => {
        cy.get('#checkboxes input[type="checkbox"]').check(['option-2', 'option-3', 'option-4']).should('be.checked')
    })

    it('unchecks multiple checkboxes', () => {
        cy.get('#checkboxes input[type="checkbox"]').check(['option-2', 'option-4']).should('be.checked')
        cy.get('#checkboxes input[type="checkbox"][value="option-3"]').should('be.checked')
        cy.get('#checkboxes input[type="checkbox"]').uncheck(['option-2', 'option-3', 'option-4']).should('not.be.checked')
    })

    it('checks either disabled or enabled checkboxes', () => {
        cy.get('#radio-buttons-selected-disabled input[type="radio"][value="cabbage"]').should('not.be.checked').should('be.disabled')
    })
});
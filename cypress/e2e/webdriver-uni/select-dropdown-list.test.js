describe('how to handle dropdown list', () => {
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it('selects dropdown list by visible text', () => {
        cy.get('#dropdowm-menu-1').select('C#')
    });

    it('selects dropdown list by value', () => {
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
    })

    it('selects dropdown list by index', () => {
        cy.get('#dropdowm-menu-3').select(2).should('have.value', 'javascript')
    })
});
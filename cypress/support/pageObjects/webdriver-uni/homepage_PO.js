class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl'), { timeout: 60000 });
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().pause().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'Contact-Us/contactus.html')
    }
}

export default HomePage_PO;
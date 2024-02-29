class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl'));
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
    }
}

export default HomePage_PO;
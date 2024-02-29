describe("Selector examples", () => {
    it("Examples of Selectors via WebdriverUni Contact Us Page", () => {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl') + "Contact-Us/contactus.html");

        // By Tag Name
        cy.get('input')

        //By attribute name and value
        cy.get('input[name="first_name"]')

        //By ID
        cy.get('#contact_me')

        //By Class
        cy.get('.feedback-input')

        //By multiple classes
        cy.get('.navbar.navbar-inverse')

        //By two different attributes
        cy.get('input[name="first_name"][placeholder="First Name"]')

        //By xpath
        cy.xpath('//input[@name="first_name"]')

        //By CSS
        cy.get('input[name="first_name"][placeholder="First Name"]')

        //By Text
        cy.contains('CONTACT US')

    })
})
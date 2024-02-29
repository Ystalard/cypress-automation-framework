// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add('selectProduct', productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el) => {
        if($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add('SubmitContactUsForm_webdriveruni', (name, last_name,email, description) => {
    if(name){
        cy.get('[name="first_name"]').type(name)
    }
    if(last_name){
        cy.get('[name="last_name"]').type(last_name)
    }
    if(email){
        cy.get('[name="email"]').type(email)
    }
    if(description){
        cy.get('textarea.feedback-input').type(description)
    }
    cy.get('[type="submit"]').click()
})
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
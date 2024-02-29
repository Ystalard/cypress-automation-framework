/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/"); 
        cy.xpath('//a[contains(@href, "contact") and starts-with(text(), "Con")]').click();
        cy.fixture('userDetails').as('user')
        cy.fixture('enquiryValidation').as('enquiryValidation')
        cy.fixture('log').as('log')
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        
        
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
            cy.get('#ContactUsFrm_enquiry').type(user.enquiry);
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('button[title="Submit"]').click();

        cy.get('@enquiryValidation').then((expect) => {
            cy.get('.mb40 > :nth-child(3)').should('have.text', expect.enquiryValidated)
        })

        cy.get('@log').then((log) => {
            cy.log(log.itComplete)
        })
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.emailInvalid);
            cy.get('#ContactUsFrm_enquiry').type(user.enquiry);
        })
        
        cy.get('button[title="Submit"]').click();

        cy.get('@enquiryValidation').then((expect) => {
            cy.get('.element_error').should('include.text',expect.enquiryNotValidated)
        })

        cy.get('@log').then((log) => {
            cy.log(log.itComplete)
        })
     })

    after(() => {
        cy.get('@log').then((log) => {
            cy.log(log.testComplete)
        })
    })
})  
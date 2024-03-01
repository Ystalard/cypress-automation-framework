import HomePage_PO from "../../support/pageObjects/webdriver-uni/homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homePage_PO = new HomePage_PO()
    const contact_Us_PO = new Contact_Us_PO()

    before(() => {
        cy.fixture('example').then(function(data){
            globalThis.data = data
        })
    });

    beforeEach(() => {
        homePage_PO.visitHomepage()
        homePage_PO.clickOn_ContactUs_Button()
    });
    
    it("Should be able to submit a successful submission via contact us form", () => {
        contact_Us_PO.contactForm_Submission(Cypress.env('first_name'), data.last_name, data.email, data.description)
        cy.get('h1').should('have.text',data.messageValidation)
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        contact_Us_PO.contactForm_Submission(data.name, data.last_name, data.email, "")
        cy.get('body').should('include.text',data.messageErrorValidation)
    });
})
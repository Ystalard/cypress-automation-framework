/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm Js alert contains the correct text", () => {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl'))
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click()
        
        cy.get("#button1").click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });

    it("Validate Js confirm box works when clicking ok", () => {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl'))
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click()
        
        cy.get("#button4").click()

        cy.on('window:confirm', (str) => {
            return true;
        })

        cy.get("#confirm-alert-text").contains('You pressed OK!')
    });

    it("Validate Js confirm box works when clicking cancel", () => {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl'))
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click()
        
        cy.get("#button4").click()

        cy.on('window:confirm', (str) => {
            return false;
        })

        cy.get("#confirm-alert-text").contains('You pressed Cancel!')
    });

    it('Validate js confirm alert box using a stub', () => {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl'))
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click()
        
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get("#button4").click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get("#confirm-alert-text").contains('You pressed OK!')
        })
    });
})
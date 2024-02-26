/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm Js alert contains the correct text", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click()
        
        cy.get("#button1").click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });

    it("Validate Js confirm box works when clicking ok", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click()
        
        cy.get("#button4").click()

        cy.on('window:confirm', (str) => {
            return true;
        })

        cy.get("#confirm-alert-text").contains('You pressed OK!')
    });

    it("Validate Js confirm box works when clicking cancel", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click()
        
        cy.get("#button4").click()

        cy.on('window:confirm', (str) => {
            return false;
        })

        cy.get("#confirm-alert-text").contains('You pressed Cancel!')
    });
})
/// <reference types="cypress" />

describe("Test fileupload via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get("#file-upload").invoke('removeAttr', 'target').click()
    });

    it("uploads a file", () => {
        cy.get("#myFile").selectFile('cypress/fixtures/laptop.png')
        cy.get("#submit-button").click()    
        
        //modify the alert event triggered on upload to validate the upload
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')
        })
    });

    it('does not upload file', () => {
        cy.get("#submit-button").click()  
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })  
    });
})
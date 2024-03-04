/// <reference types="cypress" />

describe('JSON example', () => {
    it('Json Object Examples', () => {
        const exampleObject = {"key":"value", "key2":"value2", "key3":"value3"}
        cy.log(exampleObject.key)
        cy.log(exampleObject.key2)
    })
})
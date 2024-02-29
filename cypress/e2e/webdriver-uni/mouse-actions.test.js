describe('how to handle mouse events', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('webdriveruniversityBaseUrl'))
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    });

    it('drags and drops an element', () => {
        cy.get('#draggable').trigger('mousedown', {button: 0})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {button: 0, force:true})
    });

    it('double clicks an element', () => {
        cy.get('#double-click').dblclick()
    });

    it('clicks and holds an element', () => {
        cy.get('#click-box').trigger('mousedown', {button: 0}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });

    it('overs element then click on ddl\'s option through cypress real event', () => {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Well done you clicked on the link!')
        })

        cy.get('#div-hover .dropdown').each(($el, index) => {
            // cy.wrap($el).realHover() //chrome only
            if(index != 2)
            {
                cy.wrap($el).find('.dropdown-content a').click({force:true})
                // cy.wrap($el).find('.dropdown-content a').click() // chrome only
            }
            else
            {
                cy.wrap($el).find('.dropdown-content a').eq(1).click({force:true})
                // cy.wrap($el).find('.dropdown-content a').eq(1).click() // chrome only
            }           
        })
    })

    it('overs element then click on ddl\'s option through cypress built-in solution', () => {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Well done you clicked on the link!')
        })

        cy.get('#div-hover .dropdown').each(($el, index) => {
            if(index != 2)
            {
                cy.wrap($el).find('.dropdown-content a').click({force:true})
            }
            else
            {
                cy.wrap($el).find('.dropdown-content a').eq(1).click({force:true})
            }           
        })
    })
});
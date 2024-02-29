/// <reference types="Cypress" />
describe("Test datepicker from webdriveruni", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        cy.get('#datepicker').click()
        cy.get('.datepicker-dropdown').as('calendar')
        cy.get('@calendar').find('.datepicker-switch').as('datepickerSwitch')
        cy.get('@datepickerSwitch').first().as('daysPanelHeader')
        cy.get('@datepickerSwitch').eq(1).as('monthsPanelHeader')
        cy.get('@calendar').find('.datepicker-years span.year').as('yearsPanel')
        cy.get('@calendar').find('.datepicker-months span.month').as('monthsPanel')
        cy.get('@calendar').find('.datepicker-days td.day').not('.old').not('.new').as('daysPanel')
        cy.get('@calendar').find('.datepicker-years th.next').as('nextYear')
        cy.get('@calendar').find('.datepicker-years th.prev').as('previousYear')
        cy.get('@calendar').find('.datepicker-months th.next').as('nextMonth')
    })
    
    it('selects date from the datepicker', () => {
        var date = new Date();
        date.setDate(date.getDate() + 390)
        date.setFullYear(date.getFullYear() - 20)
        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" });
        var futureDay = date.getDate();
        
        var formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '-' 
                            + date.getDate().toString().padStart(2, '0') + '-' 
                            + date.getFullYear();

        cy.log("Future Date to select: " + futureMonth + " " + futureDay + ", " + futureYear)
        cy.log("Future Date expected: " + formattedDate).then(() => {
            selectDate()
        })

        cy.get('#datepicker > input').should('have.value', formattedDate)

        //#region Functions
        function selectDate() {
            cy.get('@calendar').find('.datepicker-switch').first().should('be.visible').then(currentDate => {
                cy.log(currentDate.text())
                if(!currentDate.text().includes(futureYear)) {
                    goToYearsPanel()   
                    selectYear()                    
                }
                else if(!currentDate.text().includes(futureMonth))
                {
                    goToMonthsPanel()
                    selectMonth()
                }
                else 
                {
                    selectDay()
                }
            })
        }

        function selectYear() {            
            cy.get('@yearsPanel').each($year => {
                if($year.text() == futureYear) {
                    cy.wrap($year).click()
                    cy.get('@monthsPanelHeader').should('have.text', futureYear)
                    selectMonth()
                }
            })
        }

        function selectMonth() {
            cy.get('@monthsPanel').each(($month) => {
                if(futureMonth.startsWith($month.text())) {
                    cy.wrap($month).click()
                    selectDay()
                }
            })
        }

        function selectDay() {
            cy.get('@daysPanel').each(($day) => {
                if($day.text() == futureDay) {
                    cy.wrap($day).click()
                    return false
                }
            })
        }

        function goToYearsPanel() {
            goToMonthsPanel()
            cy.get('@monthsPanelHeader').click()
            cy.get('@yearsPanel').should('be.visible').then(() => {                
                BrowseToCorrectYearsPanel()                
            })
        }

        function BrowseToCorrectYearsPanel()
        {
            cy.get('@yearsPanel').first().then($year => {
                if(futureYear < Number($year.text()))
                {
                    cy.log("Selecting previous years panel: first year " + $year.text() + " > " + futureYear)
                    selectPreviousYearsPanel()
                    BrowseToCorrectYearsPanel()
                }
            })
            
            cy.get('@yearsPanel').last().then($year => {
                if(futureYear > Number($year.text()))
                {
                    cy.log("Selecting next years panel: last year " + $year.text() + " < " + futureYear)
                    selectNextYearsPanel()
                    BrowseToCorrectYearsPanel()
                }
            })
        }

        function selectNextYearsPanel() {
            cy.get('@nextYear').click()
        }

        function selectPreviousYearsPanel() {
            cy.get('@previousYear').click()
        }

        function goToMonthsPanel() {
            cy.get('@daysPanelHeader').click()
            cy.get('@monthsPanel').should('be.visible')
        }
        //#endregion        
    });
});  
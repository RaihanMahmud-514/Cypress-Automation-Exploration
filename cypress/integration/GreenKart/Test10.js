//cypress - Spec

/// <reference types="Cypress"/>


describe("Handling Calendar", function()
{
    it("should handle calendar", function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('a[href="#/offers"]').then(function(e1)
        {
            const monthNumber = "6"
            const date = "15"
            const year = "2027"
            const expectedList = [monthNumber, date, year];

            const url = e1.prop('href')
            cy.visit(url)
            cy.get('.react-date-picker__inputGroup').click()
            cy.get('.react-calendar__navigation__label').click()
            cy.get('.react-calendar__navigation__label').click()
            cy.contains("button", year).click()
            cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click()
            cy.contains("abbr", date).click()

            //Assertion
            cy.get('.react-date-picker__inputGroup__input').each(($e1, index, $list) =>
                {
                    cy.wrap($e1).invoke('val').should('eq', expectedList[index])
                })
        })
})
})
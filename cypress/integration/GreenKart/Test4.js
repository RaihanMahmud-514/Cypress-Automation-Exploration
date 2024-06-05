//cypress - Spec

/// <reference types="Cypress"/>

describe("My Fourth Test Suite", function()
{
    it("My Fourth Test Case", function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        //window:alert
        cy.on('window:alert', (str) =>
            {
                expect(str).to.equal('Hello , share this practice page and share your knowledge')
            })
        cy.get("[value='Confirm']").click()

        cy.on('window:confirm', (str) =>
            {
                expect(str).to.equal('Hello , Are you sure you want to confirm?')
            })
        
    })
    
})
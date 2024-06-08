//cypress - Spec

/// <reference types="Cypress"/>

describe("Handling Mouse Hover", function()
{
    it("should handle mouse hover", function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url('include', 'top')
    })
    
})
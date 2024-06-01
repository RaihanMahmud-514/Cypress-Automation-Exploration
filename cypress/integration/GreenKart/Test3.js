//cypress - Spec

/// <reference types="Cypress"/>

describe("My Third Test Suite", function()
{
    it("My Third Test Case", function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Select check boxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
    })
    
})
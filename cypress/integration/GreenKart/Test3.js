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

        //Select value from static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //Select value from Dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if($e1.text()==="India")
                {
                    cy.wrap($e1).click()
                }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    
        /* cy.get('#autocomplete').clear()

        cy.get('#autocomplete').type('Bangla')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==="Bangladesh")
                {
                    cy.wrap($el).click()
                }

        }) */

        //Deal with visibility and invisibility
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Select check boxes
        cy.get('[value="radio2"]').check().should('be.checked')


    })
    
})
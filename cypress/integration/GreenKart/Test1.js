//cypress - Spec

/// <reference types="Cypress"/>

describe("My First Test Suite", function()
{
    it("My First Test Case", function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)

        //Only showing visible item using JQuery
        cy.get('.product:visible').should('have.length', 4)
        
        //Parent-Child Chaining

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

        //Clicking on the Add to Cart button of the second item
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('Added')
        })

        //Clicking on the Add to Cart button of a item using name
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            // $e1 is a wrapped jQuery element, element count
            // wrap this element so we can use cypress commands on it
            const textVeg=$e1.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) 
            {
                cy.wrap($e1).find('button').click()
            }
          })

          //assert if the logo text is displaying correctly
          cy.get('.brand').should('have.text', 'GREENKART')

          //mannually handled promise
          cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })
    })
    
})
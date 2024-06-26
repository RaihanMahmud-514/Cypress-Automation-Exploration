//cypress - Spec

/// <reference types="Cypress"/>

describe("My Second Test Suite", function()
{
    it("My Second Test Case", function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        
        //Parent-Child Chaining
        cy.get('.products').as('productLocator')

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
          cy.get('.cart-icon > img').click()
          cy.contains('PROCEED TO CHECKOUT').click()
          cy.contains('Place Order').click()
    })
    
})
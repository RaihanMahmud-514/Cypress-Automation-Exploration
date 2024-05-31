//cypress - Spec

/// <reference types="Cypress"/>

describe("My First Test Suite", function()
{
    it("My First Test Case", function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //Only showing visible item using JQuery
        cy.get('.product:visible').should('have.length', 4)
        
        //Parent-Child Chaining
        cy.get('.products').find('.product').should('have.length', 4)

        //Clicking on the Add to Cart button of the second item
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        //Clicking on the Add to Cart button of a item using name
        cy.get('.products').find('.product').each(($e1, index, $list) => {
            // $el is a wrapped jQuery element, element count
            // wrap this element so we can use cypress commands on it
            const textVeg=$e1.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) 
            {
                cy.wrap($e1).find('button').click()
            } 
            else 
            {
              console.log("No Data Found!")
            }
          })


    })
    
})
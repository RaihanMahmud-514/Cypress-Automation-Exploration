//cypress - Spec

/// <reference types="Cypress"/>

describe("Handling Another Opening Domain", function()
{
    it("should handle another domain opening", function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function(e1)
    {
        const url = e1.prop('href')
        cy.visit(url)//qaclickacademy.com
        cy.origin(url, function()
    {
        cy.get('div.sub-menu-bar a[href*="about"]').click()
    })

    })
    
})
})
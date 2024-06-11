//cypress - Spec

/// <reference types="Cypress"/>
/// <reference types="Cypress-iframe"/>
import 'cypress-iframe'

describe("Handling I-Frame", function()
{
    it("should handle i-frame", function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
})
})
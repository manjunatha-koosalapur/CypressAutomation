/// ＜reference types="cypress" /＞


describe('Cypress webPage', function()
{

it('visit page', function () {
    cy.visit('https://example.cypress.io')
    cy.title().should('eq','Cypress.io: Kitchen Sink')
    cy.wait(2000)
    cy.contains('focus').click()                     //Loacate an element and interact with the element
    cy.url().should('include', '/commands/actions')  //Insert assertion
    cy.wait(2000)
    // cy.pause()                                       //pause on a specific place
    
    // cy.get('.home-list > :nth-child(2) > :nth-child(1)').should('have.length', 1)

    cy.get('#email1')
      .should('have.value', '')
    cy.get('.action-email')
      .type('mk@mailinator.com')
      .should('have.value', 'mk@mailinator.com')
    
    })

})
/// ＜reference types="cypress" /＞

it ('Write to file', function(){
cy.writeFile('testFile1.txt', 'Test automation by Cypress.io')

})

it ('Read from file', function(){
    cy.readFile('testFile1.txt').should('contains','Test automation by Cypress.io')
    
})
/// ＜reference types="cypress" /＞


it('loginTest', function () {
    cy.visit('https://trytestingthis.netlify.app/index.html')
    cy.fixture('example').then((user) =>{
    cy.get('#uname').click().type(user.username)
    cy.get('#pwd').click().type(user.password)
    cy.get('[type="submit"]').contains('Login').should('be.enabled').click()
})

})
/// ＜reference types="cypress" /＞

describe('Google webPage', function()
{

it('Google search', function () {
        cy.visit('https://www.google.com/')
        let item = 'Cypress.io'
        // var item = 'Cypress.io'
        // const item = 'Cypress.io'
        cy.get('.gLFyf').type(item).type('{enter}')
        
        item = 'Automation by Cypress'
        cy.log(item)
        cy.wait(2000)
        })

it('Page title and elements', function () {
        cy.visit('https://www.google.com/')   
        cy.title().should('eq','Google')     
        cy.get('.FPdoLc > center > .gNO89b').should('be.visible')
        cy.get('.FPdoLc > center > .gNO89b').should('be.enabled')
        cy.get('.FPdoLc > center > .gNO89b').should('contain', 'Google Search')

        })

it('Random function', function () {
    cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fwww.google.com%2F&hl=en&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp')
    cy.get('[jsname="Odb2Kd"] > .rFrNMe').type('Manjunath')
    cy.get('[jsname="qlx7ve"] > .rFrNMe').type('K')
    cy.get('.d2CFce > .rFrNMe').type('Manjunatha K' + Math.random()*6)
    cy.get('#accountDetailsNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()

    })

})
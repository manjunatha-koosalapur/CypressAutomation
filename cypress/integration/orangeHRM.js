/// ＜reference types="cypress" /＞

describe('OrangeHRM Test Suite', function()
{

it('login to orangeHRM', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').click().type('Admin')
    cy.get('#txtPassword').click().type('admin123')
    cy.get('#btnLogin').click()

   //search user  
    cy.get('#menu_admin_viewAdminModule > b').click()
    //cy.get('#menu_admin_UserManagement').click()
    cy.get('#searchSystemUser_userName').click().type('admin')
    //cy.wait(2000)
    cy.get('#searchBtn').click()
    cy.wait(2000)
    })


it('logout from orangeHRM', function () {
   cy.get('#welcome').click()
   cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').click()
    })


it('Verify title of Web page', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.title() .should('eq' , 'OrangeHRM')
    })


})
/// ＜reference types="cypress" /＞ 
//for auto suggestion or intelligent code completion

describe('OrangeHRM Test Suite', function()
{

it('login to orangeHRM', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').click().type('Admin')
    cy.get('#txtPassword').click().type('admin123')
    cy.get('#btnLogin').click()
    

// it('Verify all Menu names', function () {
//     cy.get('#mainMenuFirstLevelUnorderedList').contains('My Info')
//     cy.wait(2000)
    

   //search user  
    cy.get('#menu_admin_viewAdminModule > b').click()
    //cy.get('#menu_admin_UserManagement').click()
    cy.get('#searchSystemUser_userName').click().type('admin')
    //cy.wait(2000)
    cy.get('#searchBtn').click()
    cy.wait(2000)
    })

it('Verify user status-Enabled/Disabled', function () {
    cy.get('.odd > :nth-child(2)').should('have.text','Admin')
    cy.get('.odd > :nth-child(5)').should('have.text','Enabled')
    cy.wait(2000)
    })    

 

// it('add user', function () {
//     cy.get('#btnAdd').click()
//     cy.get('#systemUser_employeeName_empName').click().type('Orange User')
//     cy.get('#systemUser_userName').click().type('orangeUser')
//     cy.get('#systemUser_password').click().type('password1234')
//     cy.get('#systemUser_confirmPassword').click().type('password1234')
//     cy.get('#btnSave').click()
//     })


it('logout from orangeHRM', function () {
   cy.get('#welcome').click()
   cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').click()
    })

it('Verify title of Web page', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.title() .should('eq' , 'OrangeHRM')
    })


})
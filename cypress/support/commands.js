// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from './page_objects/loginPage';
// import LoginPage from "./page_objects/loginPage";
// import LoginPage from "./page_objects/loginPage";

const LoginPage = new loginPage();

Cypress.Commands.add('login', (emial, password, path) =>{

    LoginPage.open('user/login')
    LoginPage.logIn()
    // cy.visit('/')
    // loginPage.loginBtn.click()
    // loginPage.emailField.type('test@gmail.com')
    // loginPage.passwordField .type('Qwerty12')
    // loginPage.submitBtn.click()
    // loginPage.headerBase.should('be.visible','Reports')
})
//*********************************************************************************************
Cypress.Commands.add("SignIn", () => {
    cy.visit('/user/login');
    cy.url().should('include', '/user/login');// Should be on a new URL which includes '/user/login'
    cy.location('protocol').should('eq','https:')
    cy.get('form').within(($form) => {
        /*cy.get() will only search for elements within the form, not within the entire document.
        The major benefit this provides is when you have multiple elements on your page
        which might not be unique so to identify them uniquely you can concentrate only on
        a subset of the elements that are held within the form.
        */
        cy.get('[id="email"]').type('test@gmail.com')
        cy.get('[id="password"]').type('Qwerty12')
        cy.get('[type="submit"]').click()
        cy.root().submit() /*submits the form yielded from 'within'.
                            This is only possible because the "Log in" button
                            has type="submit" */
    })
});
//**************************************************************************************************
// Cypress.Commands.add('smartSelect',{prevSubject:'element'},(Subject, options) => {
//     cy.wrap(subject)
//         .click()
//     cy.get(`[class*="ant-select-item"][title=${item}]`)
//         .click()
// })
//**************************************************************************************

//command to select an option from the hamburger menu in navbar
Cypress.Commands.add('getDataTag', (selector) => {
    return cy.get(`a[href="/${selector}"]`);
});
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
import {navigateTo} from "./page_objects/navigationPage";
import ClientPage from "./page_objects/clientPage";
// import LoginPage from "./page_objects/loginPage";
import clientDetails from '../fixtures/clientDetails.json'

const LoginPage = new loginPage();
const clientPage = new ClientPage();

Cypress.Commands.add('login', (emial, password ) =>{

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

Cypress.Commands.add('logOut', (email, password) => {
    loginPage.dropdownUserProfile().click();
    loginPage.logout().click();

});

Cypress.Commands.add('createClientAllData', (firstNameNumbers, lastName, phoneNumber, address, city, email, company, zip) => {
    navigateTo.clientPageOpen()
    cy.wait(2000)
    clientPage.createBtn().first().click();

    clientPage.firstNamePlaceholder().type(firstNameNumbers);
    clientPage.lastNamePlaceholder().type(lastName);
    clientPage.companyPlaceholder().type(company);
    clientPage.phoneNumberPlaceholder().clear().type(phoneNumber);
    clientPage.addressLine1Placeholder().type(address);
    clientPage.emailPlaceholder().type(email);
    clientPage.statePlaceholder().click();
    clientPage.stateDropdown().contains('California').click();
    clientPage.cityPlaceholder().type(city);
    clientPage.zipCodePlaceholder().type(zip);
    clientPage.saveBtn().click();
    clientPage.linkClient().click()
    clientPage.headerClients().should('contain', 'Clients');
    // getClientPage.createBtn().click()
    // cy.fixture('clientDetails').then((clientDetails) => {
    //     getClientDetails.firstName.type(clientDetails.firstName)
    //     getClientDetails.lastName.type(clientDetails.lastName)
    //     getClientDetails.companyName.type(clientDetails.companyName);
    //     getClientDetails.phoneNumber.type(clientDetails.phoneNumber);
    //     getClientDetails.phoneExt.type(clientDetails.phoneExt);
    //     getClientDetails.email.type(clientDetails.email);
    //
    //     getClientDetails.streetName.type(clientDetails.streetName)
    //     getClientDetails.unitNumber.type(clientDetails.unitNumber)
    //     getClientDetails.cityName.type(clientDetails.city)
    //     getClientDetails.zipCode.type(clientDetails.zip)
    //     //getClientDetails.additionalInfo.type(clientDetails.additionalInfo)
    //     getClientPage.saveBtn().click()
    //     cy.wait(4000)
    });
// })
// });
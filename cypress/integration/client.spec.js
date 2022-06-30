import {navigateTo} from "../support/page_objects/navigationPage";
import ClientPage from "../support/page_objects/clientPage"
import {getClientDetails, getClientPage} from "../support/page_objects/clientPage"
import { client } from '../fixtures/clientDetails.json';

const clientPage = new ClientPage()

before('Login',() =>{
    cy.login()
    Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
})

describe('CLIENT',function () {

    // beforeEach(()=>{
    //     Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
    //     });
    // })

    describe('Client page', () => {
        it('should open client page', function () {
            navigateTo.clientPageOpen()
        });

        it('Client create placeholder are correct ', () => {
            clientPage.createBtn().click()
            clientPage.headerCreateNewClient()
            clientPage.placeholderAreCorrect()
        })

        // it('should click create new client button', function () {
        //     getClientPage.createBtn().click()
        //     //getClientPage.headerCreateNewClient()
        //     //getClientPage.placeholderAreCorrect()
        //     getClientPage.cancelBtn().click();
        // });
        it('Codes list in dropdown menu are correct', () => {

           clientPage.createBtn().click()
           clientPage.phoneCodesAreCorrect();
           clientPage.codeDropdown().contains('United States').click();
           clientPage.cancelBtn().click();
        });

        it('should type in client information', () => {
            cy.createClientAllData(client.firstName, client.lastName, client.phoneNumber, client.address, client.city, client.email, client.company, client.zip)

            })
        })

        // it('should click save button', () => {
        //     getClientPage.saveBtn().click()
        // cy.wait(4000)
        //     getClientPage.linkClient()
        //     getClientPage.headerClients().should('contain', 'Clients');
        // })

        it('Client dashboard has correct data when client created', function () {
            cy.createClientAllData(client.firstName, client.lastName, client.phoneNumber, client.address, client.city, client.email, client.company, client.zip)
            clientPage.clientCreated(client.firstName, client.lastName, client.address, client.phoneNumber, client.email, client.company);
        });
     //})
})
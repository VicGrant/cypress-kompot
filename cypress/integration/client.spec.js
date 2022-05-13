import {navigateTo} from "../support/page_objects/navigationPage";
import ClientPage, {getClientDetails} from "../support/page_objects/clientPage";
//import {getClientDetails} from "../elements/client.elements";

import addressElements from "../elements/address.elements";


const clientPage = new ClientPage()
//const addressElements = new AddressElements


describe('CLIENT',function () {
    before('Login',() =>{
        cy.login()
    })
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
        });
    })
    describe('Client page',() =>{
        it('should open client page', function () {
        navigateTo.clientPageOpen()
        });

        it('should open client page', function () {
            clientPage.createBtn()
            clientPage.headerCreateNewClient()
        });

        it('should type in client information', () => {
            cy.fixture('clientDetails', (client) => {
                getClientDetails.firstName.type(client.firstName)
                getClientDetails.lastName.type(client.lastName)
                getClientDetails.companyName.type(client.companyName);
                getClientDetails.phoneNumber.type(client.phoneNumber);
                getClientDetails.phoneExt.type(client.phoneNumbExt);
                getClientDetails.email.type(client.email);

                addressElements.streetName.type(client.streetName)
                addressElements.unitNumber.type(client.unitNumber)
                addressElements.cityName.type(client.city)
                addressElements.zipCode.type(client.zip)
            })


        })
    })

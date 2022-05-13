const faker = require("faker");

//import cypress from "cypress";
import addressElements from '../elements/address.elements';
import authPage from '../support/page_objects/auth.page';
import statesElements from '../elements/states.elements';
import {navigateTo} from "../support/page_objects/navigationPage";
import {getClientDetails} from "../elements/address.elements";
import {getOrderDetails} from "../elements/order.elements";
import {getScheduleElements} from '../elements/schedule.elements';
//import {getClientDetails} from '../elements/client.elements'

//const addressElements = new AddressElements()

describe('New order', () => {

    beforeEach(() => {
        cy.SignIn() /*cypress won't run any further tests if this one fails*/
        //cy.login() // another custom command; signin can also be performed thru an it
        // authPage.open()
        // authPage.login(Cypress.env('login'),Cypress.env('password'))
    });
//  it('should sign in', () => {  /*cypress won't run any further tests if this one fails*/
//      cy.SignIn() // using custom command
//  });

    it('creates new order', () => {

      navigateTo.ordersPageOpen()
      cy.get('[type="button"]').should('contain','Create Order').click({ multiple: true })

      // cy.clearLocalStorage()
      // cy.get(':nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment').click({force:true})

      // cy.get('#nav-flyout-ya-signin').invoke('show'); //click hidden element
      // cy.contains('Sign').click();

//************************************************* CLIENT DETAILS ***********************************************************
        getClientDetails.firstName()    //First name input field
        getClientDetails.lastName()     //Last name input field
        getClientDetails.companyName()  //Company input field
        getClientDetails.phoneNumber()  //Phone input field
        getClientDetails.phoneExt()     //Phone Extension input field
        getClientDetails.email()        //Email input field

//****************************************************ADDRESS***********************************************************
        addressElements.streetName.click()      //Address input field
            .type(faker.address.streetName());

        addressElements.unitNumber.click()      //Unit input field
            .type(faker.random.number(3));

        addressElements.cityName.click()        //City input field
            .type(faker.address.city());

        addressElements.zipCode.click()         //Zip code input field
            .type(faker.address.zipCode());

       addressElements.state.click({force:true}) //State input field
       statesElements.texsas.click()      // selecting the state from drop down

//************************************************ ORDER DETAILS *******************************************************
        getOrderDetails.orderType() // Order Type input field
        getOrderDetails.orderDescription() //Description input field

//****************************************** ********* ITEMS ***********************************************************
// TODO:
//         //"Add Item Header" button
//         cy.get('.css-1ve951f').click()
//
//TODO:         //"Add Item" button
//         cy.get('.css-5q0qmu').click()

//************************************************** SCHEDULE **********************************************************
        // Calendar start date input field

       getScheduleElements.calStartDatePopup() //Start date calendar popup
       getScheduleElements.calEndDatePopup()  //End date calendar popup

       getScheduleElements.clockPopupStartTime() //Start time popup clock button
       getScheduleElements.clockPopupEndTime() //End time input

        //worker search dynamic dropdown input
         cy.get('#worker-search').click()
         //also works: cy.get('.MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click({ multiple: true })

        //Save button
        cy.get('[type="submit"]').should('contain','Save').click()

        cy.get('[id="more-button"]').click()
        cy.get('[id="more-menu"]').contains('Delete').click()
        cy.get('[class="ant-btn ant-btn-default ant-btn-dangerous"]').should('contain','OK').click()
    });

});
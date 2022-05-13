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
        cy.SignIn()
        //cy.login()// using custom command
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

//******************************************* CLIENT DETAILS *********************************************************************
        getClientDetails.firstName()    //First name input field
        getClientDetails.lastName()     //Last name input field
        getClientDetails.companyName()  //Company input field
        getClientDetails.phoneNumber()  //Phone input field
        getClientDetails.phoneExt()     //Phone Extension input field
        getClientDetails.email()        //Email input field

//***********************************************ADDRESS***************************************************
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

//******************************************************** ORDER DETAILS *******************************************************************************
        getOrderDetails.orderType() // Order Type input field
        getOrderDetails.orderDescription() //Description input field

//********************************************************** ITEMS ******************************************************************
//         //"Add Item Header" button
//         cy.get('.css-1ve951f').click()
//
//         //"Add Item" button
//         cy.get('.css-5q0qmu').click()

//*********************************************************** SCHEDULE *******************************************************************
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


/* cy.pause() /* cypress will stop the execution of tests at this precise point
                     and will wait for you click play in the Test Command Panel*/



// cy.get(".dayContainer span:nth-child(15)").click()
//     .type(`${faker.name.firstName()}`)


/*    .should('contain', '03/03/2022')
CypressError
Timed out retrying after 4050ms: cy.should() failed because this element is detached from the DOM.

<button class="MuiButtonBase-root MuiPickersDay-root Mui-selected MuiPickersDay-dayWithMargin css-1he5d17" tabindex="0" type="button" aria-label="Mar 3, 2022">...</button>

Cypress requires elements be attached in the DOM to interact with them.

The previous command that ran was:

> cy.xpath()

This DOM element likely became detached somewhere between the previous and current command.

Common situations why this happens:
- Your JS framework re-rendered asynchronously
- Your app code reacted to an event firing and removed the element

You typically need to re-query for the element or add 'guards' which delay Cypress from running new commands.

 */

//cy.get(':nth-child(3) > :nth-child(4) > .MuiButtonBase-root').click()//clock
//cy.get(".dayContainer span:nth-child(15)").click(); (outside example)
// .type(`${faker.date.future()}`)
//to pick an end date on the popup calendar

//also works: cy.get('[class="MuiButtonBase-root MuiPickersDay-root MuiPickersDay-dayWithMargin css-1he5d17"][aria-label="Mar 6, 2022"]').click()  //data-testid="CalendarIcon"
// cy.xpath('//button[ @aria-label="Mar 29, 2022"]').click({ multiple: true })

// To pick a time from the popup clock face
// cy.get('div.MuiPaper-root')   // Pop-up calendar
//     .children('div.css-1xhj18k')
//     .children('div.css-epd502')

//cy.get('[qa_id="SartTimeClock"]').click()
//cy.xpath('//*[@class=" css-1flhz3h"][1]').click({force: true}) // FINDS THE ELEMENT BUT DOES NOT CLICK ON IT. ELEMENT DOES NOT REACT
// cy.get('[class=" css-1flhz3h"]').contains('5').click({force : true})
// cy.get('[class=" css-1flhz3h"][aria-label="15 minutes"]').click()
//  .children('div.css-eziifo')
//  .children('div.Select hours. No time selected')//contains('3 hours') // selector to test elements that are part of the popup clock face


//div.css-epd502.css-eziifo

//cy.get('[class="css-1ozefeb"]').find('[aria-label="2 hours"]')
// cy.get(':nth-child(5) > :nth-child(6) > .MuiButtonBase-root').click() //clock

// cy.get('[qa_id="EndTimeClock"]').click({force:true})

// cy.get('[id = "mui-13"]').click()
//     .type(`${faker.date.future()}`)

//cy.get('[aria-label="Select hours. No time selected"]')
/*
cy.get('.css-1ozf7xo > :nth-child(2) > .MuiOutlinedInput-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="ClockIcon"] > [d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"]').click({force:true})
    //.type(`${faker.date.future()}`)
//cy.get('.css-eziifo > .css-eziifo > .css-1umqo6f > .css-1flhz3h > :nth-child(12)').click({force:true})
cy.get('[id="mui-14"]').click({force:true})
    .type(`${faker.date.future()}`)
 */
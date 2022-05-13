import {navigateTo} from "../support/page_objects/navigationPage";

describe('Hamburger menu links',function (){

    beforeEach(() =>{
        cy.login()
})
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
    })

    it('should click on all navbar links', function () {

        navigateTo.clientPageOpen()
        navigateTo.ordersPageOpen()
        navigateTo.estimatesPageOpen()
        navigateTo.invoicesPageOpen()
        navigateTo.paymentsPageOpen()
        navigateTo.schedulePageOpen()

        navigateTo.hamburgerIcon('worker','Workers')
        navigateTo.hamburgerIcon('address','Addresses')
        navigateTo.hamburgerIcon('vendor','Vendors')
        navigateTo.hamburgerIcon('product','Products')
        navigateTo.hamburgerIcon('purchaseOrder','Purchase Orders')
        navigateTo.hamburgerIcon('absence','Absences')

        // navigateTo.hamburgerIcon2('worker')
        // navigateTo.hamburgerIcon2('address')
        // navigateTo.hamburgerIcon2('vendor')
        // navigateTo.hamburgerIcon2('product')
        // navigateTo.hamburgerIcon2('purchaseOrder')
        // navigateTo.hamburgerIcon2('absence')

       //
       //  navigateTo.hamburgerIcon()
       //  cy.get('a[href="/address"]').click()
       //  cy.getDataTag('address').click()
       //
       //
       //  navigateTo.hamburgerIcon()
       //  cy.get('a[href="/vendor"]').click()
       //  cy.getDataTag('vendor').click()
       //
       //  navigateTo.hamburgerIcon()
       // cy.get('a[href="/product"]').click()
       //  cy.getDataTag('product').click()
       //
       //  navigateTo.hamburgerIcon()
       //  cy.get('a[href="/purchaseOrder"]').click()
       //  cy.getDataTag('purchaseOrder').click()
       //
       //  navigateTo.hamburgerIcon()
       //  cy.get('a[href="/absence"]').click()
       //  cy.getDataTag('absence').click()

        navigateTo.userinfoIcon()

        navigateTo.settingsIcon()

        //navigateTo.userProfileIcon()

        navigateTo.userProfileIcon('profile','profile')
        navigateTo.userProfileIcon('settings','companyAccount')
        navigateTo.userProfileIcon('logout')

    });
 })


import {navigateTo} from "../support/page_objects/navigationPage";


describe('Login successful', () => {
   it('Login successful', () => {
    //cy.login() //using custom command
  })
})


describe('Base page navbar links', () => {
  it('Base page navbar link Clients', () => {

      navigateTo.clientPageOpen()

      navigateTo.ordersPageOpen()

      navigateTo.estimatesPageOpen()

      navigateTo.invoicesPageOpen()

      navigateTo.paymentsPageOpen()

      navigateTo.schedulePageOpen()

  })
})
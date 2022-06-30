export default class OrderPage {

  ordersAddIcon = () => cy.get('[id="orders"]').parent('div').find('[role="button"]');


  createOrderFromClient(firstName, lastName){
    this.ordersAddIcon().click();
  }

  datePickerStartTime(){
    cy.get('[data-testid="CalendarIcon"]').first().click()
    cy.get('.PrivatePickersSlideTransition-root.css-dhopo2').find('button')
       .then( button => {
         cy.wrap(button)
         cy.get('[aria-label]').contains('14').click({force:true})
       })
    //cy.get('[qa_id="InputStartDate"]').should('have.value','06/14/2022')
    cy.get('[qa_id="InputStartDate"]').should('have.value','06/14/2022')
  }
}
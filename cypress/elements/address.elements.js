import faker from "faker";

class AddressElements {
   get streetName(){ return cy.get('[id="addressLine1"]')};
   get unitNumber(){return cy.get('[id="addressLine2"]')};
   get cityName(){return cy.get('[id="city"]')};
   get zipCode(){return cy.get('[id="zipCode"]')};
   get state(){return cy.get('[id="StateClick"]')};
}

class ClientDetails {
   firstName() {
      cy.get('[id="firstName"]').click()
          .type('Shyann')
          .should('have.value', 'Shyann')
      //.type(faker.name.firstName());
   }
   lastName(){
      cy.get('[id="lastName-search-auto"]')
          //.find('MacGyver')
          .type('Friesen').click()
          .should('have.value', 'Friesen')
      //.type(faker.name.lastName());
      //cy.get('[name="client.lastName"]').find('Friesen')
   }
   companyName(){
      cy.get('[id="company-search-auto"]')
          .type(faker.company.companyName());
   }
   phoneNumber(){
      cy.get('[id="phone"]')
          .type(faker.phone.phoneNumber());
   }
   phoneExt(){
      cy.get('[id="ext"]')
          .type(faker.random.number(3));
   }
   email(){
      cy.get('[id="email-search-auto"]')
          .type(faker.internet.email());
   }
}
export const getClientDetails = new ClientDetails()
export default new AddressElements()


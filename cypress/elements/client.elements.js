class ClientDetails {
    get firstName() { return cy.get('[id="firstName"]')};
    get lastName(){return cy.get('[id="lastName"]')};
    get companyName(){return cy.get('[id="company"]')};
    get phoneNumber(){return cy.get('[id="phone"]')};
    get phoneExt(){return cy.get('[id="ext"]')};
    get email(){return cy.get('[id="email"]')};

}
export const getClientDetails = new ClientDetails()
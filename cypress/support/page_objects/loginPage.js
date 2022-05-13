//Elements

 export default class LoginPage {

    //loginBtn = () => cy.get('[data-qa="login"]').click();
    emailField = () => cy.get('[id="email"]');
    passwordField = () => cy.get('[id="password"]');
    submitBtn = () => cy.get('[type="submit"]').contains('Log in');
    headerBase = () =>  cy.get('.col-md-8');

    open(path){
        cy.visit(path);
    }

    logIn(){
        this.emailField().type('test@gmail.com');
        this.passwordField().type('Qwerty12');
        this.submitBtn().click();
        this.headerBase().should('be.visible','Reports');
    };
}



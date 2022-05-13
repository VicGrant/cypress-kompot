//stores elements and methods
import metaPage from "./metaPage";

class AuthPage extends metaPage {
   get emailField() { return  cy.get('[id="email"]')};
   get passwordField() {return  cy.get('[id="password"]')};
   get submitBtn() {return  cy.get('[type="submit"]').contains('Log in')};

    open() {
        return super.open('/user/login');
    }

    login(email, password){
        this.emailField.type(email)
        this.passwordField.type(password)
        this.submitBtn.click()

    }
}

export default new AuthPage()

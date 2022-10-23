import BasePage from "./BasePage";

class HomePage extends BasePage{
    visit() {
        cy.log('Open website login page');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginField() {
        return cy.get('#loginFrm_loginname');
    }

    getPasswordField() {
        return cy.get('#loginFrm_password');
    }

    getSubmitButton() {
        return cy.get('button[type="submit"]').contains('Login');
    }

    assertUserUnauthorized() {
        cy.log('Check user is unauthorized');
        cy.getCookie('customer').should('be.null');
        cy.log('User is unauthorized ✅');
    }

    submitLoginForm(username, password){
        cy.log('Authorize user');
        this.getLoginField().type(username);
        this.getPasswordField().type(password);
        this.getSubmitButton().click();
    }
}
export default new HomePage();

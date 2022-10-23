import BasePage from "./BasePage";

class HomePage extends BasePage{
    visit() {
        cy.visit('/');
    }

    getLoginHeading() {
        return cy.get('[data-test="login"]');
    }
}
export default new HomePage();

export default class BasePage{
    visit() {
        cy.visit('/login');
    }

    getSearchInput() {
        return cy.get('#filter_keyword');
    }
}

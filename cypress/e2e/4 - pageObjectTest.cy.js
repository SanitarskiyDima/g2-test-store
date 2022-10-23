import user from '../fixtures/user.json'
import homePage from "../support/pages/HomePage";
import basePage from "../support/pages/BasePage";

it('Order', () => {

    cy.setCookie("AC_SF_8CEFDA09D5", user.session.sessionToken);

    homePage.getLoginHeading();
    homePage.getSearchInput();
})

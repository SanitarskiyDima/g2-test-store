import user from '../fixtures/user.json'
import homePage from "../support/pages/HomePage";
import basePage from "../support/pages/BasePage";
import {login} from "../support/helper"

it.skip('Order', () => {

    login(user);

    homePage.getLoginHeading();
    homePage.getSearchInput();

})

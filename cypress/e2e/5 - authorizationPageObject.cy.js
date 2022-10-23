import user from '../fixtures/user.json'
import * as domain from "domain";
import loginPage from "../support/pages/LoginPage";

describe('qweqwe', () => {

    it('Authorization', () => {
        loginPage.visit();
        loginPage.assertUserUnauthorized();
        loginPage.submitLoginForm(user.email, user.password)
    })

})




import user from '../fixtures/user.json'
import * as domain from "domain";

describe('qweqwe', () => {

    let cookieCustomer;
    let cookieAC_SF_8CEFDA09D5;
    let logoutURl;

    it('Authorization', () => {
        cy.log('Open website login page');
        cy.visit('/index.php?rt=account/login');

        cy.log('Check user is unauthorized');
        cy.getCookie('customer').should('be.null');

        cy.log('Authorize user');
        cy.get('#loginFrm_loginname').type(user.email);
        cy.get('#loginFrm_password').type(user.password);
        cy.get('button[type="submit"]').contains('Login').click();

        cy.log('Extract token');
        cy.getCookie('customer').should('exist').then(cookie => {
            cookieCustomer = cookie
        });

        cy.getCookie('AC_SF_8CEFDA09D5').should('exist').then(cookie => {
            cookieAC_SF_8CEFDA09D5 = cookie
        });
    })

    it.skip('Demo how cookie works', () => {

        cy.log('Open website main page');
        cy.visit('/');

        cy.log('Check user is unauthorized');
        cy.getCookie('customer').should('be.null');

        cy.log('Set token in cookie');
        cy.setCookie('customer', `${token.value}`);

        cy.log('Cookie is not null');
        cy.getCookie('customer').should('not.be.null');

        cy.log('Reload the page to get authorized user');
        cy.reload();

        cy.log('Reload page to get logged user');
        cy.get('#customernav').should('contain', `Welcome back ${user.username}`);

    })

})




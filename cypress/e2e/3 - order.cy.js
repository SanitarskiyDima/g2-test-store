import user from '../fixtures/user.json'
import {findProduct, isProductPage} from '../support/helper'

it('Order', () => {

    cy.setCookie("AC_SF_8CEFDA09D5", user.session.sessionToken);

    cy.visit('/');

    cy.get('#filter_keyword')
        .type('i')
        .closest("form")
        .submit();


    findProduct('qweqwe')

    cy.get('.productpagecart').click()
    cy.get('#cart_checkout1').click()
    cy.get('#checkout_btn').click()
    cy.get('.contentpanel').should('contain', "Thank you for shopping with us!")
})

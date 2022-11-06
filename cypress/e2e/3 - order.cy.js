import user from '../fixtures/user.json'
import {login, findNewProd} from '../support/helper'

it('Order', () => {

    login(user);

    cy.get('#filter_keyword')
        .type('i')
        .closest("form")
        .submit();
        
    findNewProd('Benefit Bella Bamba')

    cy.get('.productpagecart').click()
    cy.get('#cart_checkout1').click()
    cy.get('#checkout_btn').click()
    cy.get('.contentpanel').should('contain', "Thank you for shopping with us!")
})

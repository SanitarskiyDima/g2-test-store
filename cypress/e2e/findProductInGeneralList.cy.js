
it('Product found on general list', () => {
    cy.visit('/');

    cy.get('#filter_keyword')
        .type('i')
        .closest("form")
        .submit();

    cy.findProductByName('Lancome Visionnaire Advanced Skin Corrector');

})

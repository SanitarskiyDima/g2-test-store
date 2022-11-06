export function findProduct(productName) {
    cy.get('ul.pagination a').then((pages) => {
        return pages.length
    }).then(pageCount => {
        cy.log(`**Page count: ${pageCount}**`)
        for (let i = 0; i < pageCount; i++) {
            cy.location().then(location => {
                if (!location.search.includes('product/product')) {
                    cy.get('body').then(($body) => {
                        if ($body.find(`.prdocutname[title="${productName}"]`).length > 0) {
                            cy.get(`.prdocutname[title="${productName}"]`).click();
                        } else {
                            cy.get('ul.pagination a').contains('>').click();
                        }
                    })
                }
            })
        }
    })
}

export function login(user) {

    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.email);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();

}

export function findNewProd(productName) {
    cy.get('#filter_keyword').type('i').closest('form').submit();
    cy.get('ul.pagination a').then(pages => {
        return pages.length
    }).then(pageCount => {
        for (let i = 0; i < pageCount; i++) {
            cy.location().then(location => {
                if (!location.search.includes('product/product')) {
                    cy.get('body').then(body => {
                        if (body.find(`.prdocutname[title="${productName}"]`).length > 0) {
                            cy.get(`.prdocutname[title="${productName}"]`).click();
                        } else {
                            cy.get('ul.pagination a').contains('>').click()
                        }
                    })
                }
            })
        }
    })
}


export function findProductWithRecursion(productName) {
    cy.get('body').then((body) => {
        if (body.find(`[title="${productName}"]`).length > 0) {
            cy.get(`[title="${productName}"]`).click();
        }
        else {
            cy.get('.pagination li a').contains('>').click();
            findProductWithRecursion(productName);
        }
    })

}
import {faker} from '@faker-js/faker';

// реєстрація з фейкером https://www.npmjs.com/package/@faker-js/faker

it.skip('Registration', () => {
    cy.visit('/');

    cy.get('.topnavbar [data-id="menu_account"]').click();
    cy.get('#accountFrm button').click();

    cy.get('#AccountFrm_firstname').type('FirstTestName');
    cy.get('#AccountFrm_lastname').type('LastTestName');
    cy.get('#AccountFrm_email').type(faker.internet.email());

    cy.get('#AccountFrm_address_1').type('Test Address str.');
    cy.get('#AccountFrm_city').type('Test City');

    cy.get('#AccountFrm_zone_id').select('Kent');
    cy.get('#AccountFrm_postcode').type('37289');
    cy.get('#AccountFrm_country_id').select('Denmark');

    cy.get('#AccountFrm_loginname').type('testUsernameForAutomation');
    cy.get('#AccountFrm_password').type('123QWEqwe');
    cy.get('#AccountFrm_confirm').type('123QWEqwe');

    cy.get('#AccountFrm_newsletter0').check();

    //cy.get('button[title="Continue"]').click();
})


// але це не все. Щоб перевірити реєстрацію, поторібно авторизуватися під новим юзером
// тому для цього потрібно створити обʼєкт поза тестом і перевикористати його

let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),i
    zone: '904',
    postCode: faker.address.zipCode(),
    countryId: 'United Kingdom',
    username: faker.internet.userName(),
    password: faker.internet.password(10, true)
}

it('Registration', () => {
    cy.visit('/');

    cy.get('.topnavbar [data-id="menu_account"]').click();

    cy.get('#accountFrm button').click();

    cy.get('#AccountFrm_firstname').type(user.firstName);
    cy.get('#AccountFrm_lastname').type(user.lastName);
    cy.get('#AccountFrm_email').type(user.email);

    cy.get('#AccountFrm_address_1').type(user.address);
    cy.get('#AccountFrm_city').type(user.city);

    cy.get('#AccountFrm_zone_id').select(1)

    cy.get('#AccountFrm_postcode').type(user.postCode);
    cy.get('#AccountFrm_country_id').select(user.countryId);

    cy.get('#AccountFrm_loginname').type(user.username);
    cy.get('#AccountFrm_password').type(user.password);
    cy.get('#AccountFrm_confirm').type(user.password);

    cy.get('#AccountFrm_newsletter0').check();
    cy.get('#AccountFrm_agree').check();

    cy.get('button[title="Continue"]').click();

    cy.get('#maincontainer').contains(user.firstName).should('exist');

})


it('Authorization', () => {

    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.username);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();

    console.log(user)
})

// describe('Test iFrame', () => {
//     it('should type in the iframe', () => {
//         cy.visit('http://the-internet.herokuapp.com/iframe');
//         cy.getIframe('#mce_0_ifr').clear().type('This is a test description.');
//     });
// });
describe('Test iFrame on myshop.org.in', () => {
    it('should match and interact with elements inside the iframe', () => {
        cy.visit('https://myshop.org.in/');
        
        // Debugging step
        cy.get('iframe-selector').should('exist').then(($iframe) => {
            cy.log('Iframe found:', $iframe);
        });

        cy.getIframe('iframe-selector').within(() => {
            cy.get('element-selector').should('have.text', 'Expected Text');
            cy.get('another-element-selector').click();
        });
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('pppp.cy.js', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://myshop.org.in/index.php?route=account/register');
        cy.get('#input-firstname').clear('p');
        cy.get('#input-firstname').type('prsjdknnnnnnnnnnnnnnnnnnn');
        cy.get('#input-lastname').clear('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
        cy.get('#input-lastname').type('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
        cy.get('#input-email').clear('p');
        cy.get('#input-email').type('peee');
        cy.get('#input-telephone').clear('9');
        cy.get('#input-telephone').type('9');
        cy.get('#input-password').clear('1');
        cy.get('#input-password').type('12');
        cy.get('.account-pass2 > .col-sm-10').click();
        cy.get('#input-confirm').clear('2');
        cy.get('#input-confirm').type('21');
        cy.get('.pull-right > input').check();
        cy.get('.pull-right > .btn > span').click();
        cy.get('.account-telephone > .col-sm-2').click();
        cy.get('#input-telephone').click();
        cy.get('#input-confirm').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('pppppp.cy.js', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://myshop.org.in/index.php?route=account/register');
        cy.get('#input-firstname').clear('{enter}');
        cy.get('#input-firstname').type('{enter}');
        cy.get('.pull-right > .btn').click();
        cy.get('.account-firstname > .col-sm-10 > .text-danger').click();
        cy.get('.account-lastname > .col-sm-10 > .text-danger').click();
        cy.get('.account-email > .col-sm-10 > .text-danger').click();
        cy.get('.account-telephone > .col-sm-10 > .text-danger').click();
        cy.get(':nth-child(2) > .has-error > .col-sm-10 > .text-danger').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('ppppppppppppp.cy.js', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://myshop.org.in/index.php?route=account/register');
        cy.get('#input-firstname').clear('prsjdknnnnnnnnnnnnnnnnnnn');
        cy.get('#input-lastname').type('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
        cy.get('#input-email').type('prem.com');
        cy.get('#input-telephone').type('98');
        cy.get('#input-password').type('23');
        cy.get('#input-confirm').type('13');
        cy.get('.pull-right > .btn').click();
        cy.get('#account').click();
        /* ==== End Cypress Studio ==== */
    });
});


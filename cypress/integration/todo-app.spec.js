<reference types="cypress"/>

describe('Todo application', () => {
    it('show all WCAG failures', () => {
        cy.visit('https://genshin.hoyoverse.com/en/');
        cy.injectAxe();
        cy.checkA11y();
    })
})
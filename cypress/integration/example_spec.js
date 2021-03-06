describe('Cypress Demo', () => {

    beforeEach(() => {
        cy.server({urlMatchingOptions: {matchBase: false}});
        cy.route('**/www.mocky.io/**').as('getReview');
        cy.visit('/');
    });

    it('should assert that title is correct', () => {
        cy.title().should('include', 'Github Repo Explorer');
    });

    it('should assert header title is correct', () => {
        cy.get('.App-header').contains('Welcome to the Github Repo Explorer');
    });

    it('should load Github repositories', () => {
        cy.get('input').clear().type('fedelopez');
        cy.get('button').click();
        cy.get('ul').children().should('have.length', 28);
    });

    it('should wait for long response', () => {
        cy.get('input').clear().type('fedelopez');
        cy.get('button').click();
        cy.get('ul').children().should('have.length', 28);

        cy.get(':nth-child(1) > b').eq(0).click();
        cy.wait('@getReview');
        cy.get('p').should('have.text', 'This repository is awesome!');
    });
});

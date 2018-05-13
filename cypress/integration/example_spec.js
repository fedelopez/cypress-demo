describe('Cypress Demo', function () {

    it('should assert that title is correct', function () {
        cy.visit('http://localhost:3001/');
        cy.title().should('include', 'Github Repo Explorer');
    });

    it('should assert header title is correct', function () {
        cy.visit('http://localhost:3001/');
        cy.get('.App-header').contains('Welcome to the Github Repo Explorer');
    });

    it('should load Github repositories', function () {
        cy.get('input').type('fedelopez');
        cy.get('button').click();
        cy.get('ul').children().should('have.length', 27);
    });
});

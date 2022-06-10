describe('HOME PAGE', () => {
  it('visit home page', () => {
    cy.visit('http://localhost:8080/');
  });

  it('mock the employees request', () => {
    cy.request('employees');
  });

  it('assert employees data is apearing', () => {
    cy.get('.c-users-list__body').should('be.visible');
  });

  it('asssert performance link', () => {
    cy.contains('Team performance chart page').click()
    cy.url().should('include', '/team-performance')
  });

});

describe('HOME PAGE', () => {
  it('visit home page', () => {
    cy.visit('http://localhost:8080/');
  });

  // it('assert employees data is apearing', () => {
  //   cy.get('[data-testid="employees-list"]').should('be.visible');
  // });

  it('asssert performance link', () => {
    cy.contains('Team performance chart page').click()
    cy.url().should('include', '/team-performance')
  });

  it('mock the employees request', () => {
    cy.request('https://fe-task.getsandbox.com/employees');
  });
});

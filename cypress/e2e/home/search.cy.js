describe('UI SEARCH TEST',()=>{

  it('shoud load the componet page',()=>{

    cy.visit('http://localhost:3000');
    cy.get('[data-cy=search-box]').should('be.visible');
    cy.get('[data-cy=search-box]').should('have.css','max-width').and('eq','250px');
    cy.get('[data-cy=input]').should('be.visible');
    cy.get('input[placeholder="Search..."]').type('T-shirt');
    cy.get('[data-cy="button"]').click();
  });

})
describe('UI LOGO TESTE',()=>{

  it('shoud load the component page',()=>{

    cy.visit('http://localhost:3000');
    cy.get('[data-cy=logo]').should('be.visible');
    cy.get('[data-cy=logo]').should('have.css','height').and('eq','41px')
    cy.get('[data-cy=logo]').should('have.css','width').and('eq','34px')


  });

})
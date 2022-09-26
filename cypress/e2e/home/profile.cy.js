describe('UI TEST PROFILE THE NAVBAR', ()=>{

  it('should load the component profile',()=>{

    cy.visit('http://localhost:3000');
    cy.get('[data-cy=profile]').should('be.visible');
    
  })

})
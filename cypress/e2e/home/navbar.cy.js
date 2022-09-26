describe('UI TEST NAVBAR',()=>{

  it('should load the component page',()=>{

    cy.visit('http://localhost:3000');
  
    cy.get('[data-cy=navbar]').should('be.visible');
    cy.get('[data-cy=navbar]').should('have.css','display').and('eq','flex');
    cy.get('[data-cy=navbar]').should('have.css','max-width').and('eq','max-content');
    cy.get('[data-cy="navbar"]> :nth-child(1)').should('have.text','Laptops')
    cy.get('[data-cy="navbar"]> :nth-child(2)').should('have.text','Computador')
    cy.get('[data-cy="navbar"]> :nth-child(3)').should('have.text','Smartphones')
    cy.get('[data-cy="navbar"]> :nth-child(4)').should('have.text','Gamer')
    cy.get('[data-cy="navbar"]> :nth-child(5)').should('have.text','About')
    cy.get('[data-cy="navbar"]> :nth-child(5)').should('have.css','font-size').and('eq','16px')
    cy.get('[data-cy="navbar"]> :nth-child(5)').click()

    //cy.viewport('iphone-x');

  })
})
describe('Custom commands', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('click on different positions', () => {
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(80, 100)
  })

  it('double click', () => {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('hover using trigger', () => {
    cy.get('.dropdown-toggle').trigger('click') //mouseover
    cy.get('.dropdown-menu').should('be.visible')
  })
})

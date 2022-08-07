describe('Custom commands', () => {
  let name = 'talha'

  it('set and get local storage', () => {
    cy.setLocalStorage('name', name)
    cy.getLocalStorage('name').should('eq', name)
  })

  it('sensitive option show * custom command', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@gmail.com')
    cy.findByPlaceholderText('Email').type('test@gmail.com', { sensitive: true })
  })
})

describe('fixture tests', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })

  it('intercept request', function () {
    cy.visit('commands/network-requests')
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((data) => cy.log(data))
  })

  it('pull data from fixtures', () => {
    cy.fixture('example').then((data) => {
      cy.log('data', data)
    })
  })

  it('update data from fixtures', () => {
    cy.fixture('example').then((data) => {
      data.email = 'abc@gmail.com'
      cy.log('updated data', data)
    })
  })
})

describe('first test', () => {
  const cypressText = Cypress.env('cypressText') //read env from cypress.json

  beforeEach(() => {
    cy.visit('/commands/actions') //https://example.cypress.io/commands/actions
  })

  // it('has label', () => {
  //     cy.get('label').should('contain.text',"Describe")
  // })

  // it('has .container scope p', () => {
  //     cy.get('.container').eq(1).find('p').should('exist')
  // })

  //  it('has .container within', () => {
  //     cy.get('.container').eq(2).within(()=>{
  //         cy.get('h4').should('exist')
  //          cy.get('p').should('exist')
  //     })
  // })

  // it('react testing library', () => {
  //     cy.findByText(cypressText).should('exist')
  // })

  // it('async nature & type Email', () => {
  //     cy.findByPlaceholderText("Email").type("test@gmail.com")
  //     cy.wait(2000)
  //     console.log("called firstly") //only cypress command run syncronously (js code run async)
  //     cy.log("cypress wait finished")
  //     cy.wait(1).then(()=>{
  //         console.log("called on last")
  //     })
  // })

  // it('dropdown active class', () => {
  //     cy.get(".dropdown-menu").find("li").eq(2).should('have.class',"active")
  // })

  ////chaining multiple commands
  // it('dropdown neg assertion', () => {
  //     cy.get(".dropdown-menu").find("li").first().should('not.have.class',"active")
  //     .find('a').should('have.attr','href','/commands/querying')
  // })

  //  it('check link correctly', () => {
  //     cy.visit("/")
  //     cy.findAllByText("Actions").last().click()
  //     cy.url().should('include',"commands/action")
  // })

  //  it('display none pass force:true link correctly', () => {
  //     cy.visit("/")
  //     cy.findAllByText("Actions").first().click({force: true})
  //     cy.url().should('include',"commands/action")
  // })

  // it('input field check enter then clear input then again check', () => {
  //     cy.findByPlaceholderText("Email").type("test@gmail.com").should('have.value','test@gmail.com')
  //     .clear().should('have.value','')
  // })

  it('checkbox check', () => {
    cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
  })
})

describe('App', () => {
  it('increments the counter', () => {
    cy.visit('http://localhost:3000/')
    cy.findByRole('button', { name: /count is:/i }).click()
    cy.findByRole('button', { name: /count is:/i }).should(
      'contain',
      'count is: 1'
    )
  })
})

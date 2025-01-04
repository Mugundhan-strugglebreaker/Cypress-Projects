it('Google Search' , () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Automation Step By Step{Enter}')
    cy.get('[data-hveid="CBsQAA"] > .nPDzT > .YmvwI').click()
})
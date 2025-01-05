/// <references type="cypress"/>

it('Assertion Demo', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('get').click()

    //Implict Assertions

    //Not chained using should
    cy.get('#query-btn')
    .should('contain', 'Button')
    .should('have.class', 'query-btn')
    .should('be.visible')
    .should('be.enabled')


    // Using chained by "and" and it follows the should comparator
    cy.get('#query-btn')
    .should('contain', 'Button')
    .and('have.class', 'query-btn')
    .and('be.visible')
    .and('be.enabled')
    cy.get('h1').should('have.text','Querying')


    //Explict Assertions
    //Except

    expect(true).to.be.true
    let name = 'cypress'
    expect(name).to.be.equal('cypress')

    /*
        some commands used in explict
        to.not.equal()
        to.be.a('string')
        to.be.true
        to.be.false
        to.be.null
        to.exist
    */

    //assert

    assert.equal(4,'4','NOT EQUAL')
    assert.strictEqual('4','4', 'Not equlal')

    /*

      other commands 
      notEqual, strictEqual , isAbove , isBelow, exists , notExists , true
      false, isString, isNotString, isNumber, isNotNumber

      */

})
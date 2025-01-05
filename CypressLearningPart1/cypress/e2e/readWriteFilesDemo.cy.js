before( function() {
    cy.fixture('example.json').as('test_data')
})

// fixture for reading a file

it('Read files using Fixture' , ()=>{
    cy.fixture('example.json').then((data) => {
        cy.log(data.email)
    })

    cy.get('@test_data').then((data) => {
        cy.log(data.email)
    })

    /*
      // To check the data in file
      cy.fixture("filename").its('name).should('eq','hello')
    */
})

// readFile for reading a file

it('Read file using ReadFile', () => {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.email)
    })
})

it('Write File demo' , () =>{
    cy.writeFile('sample.txt', 'Hello i am Mugundhan S \n')

    cy.writeFile('sample.txt', 'I am Learning cypress' , { flag: 'a+'})

    // without flag option it override the content that already present in that file for appending we have use the flag 'a+'
})
const { LoginPage } = require("./pages/loginPage");

const loginPage = new LoginPage();

describe('All Login Test' , () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })


    // only to run that particular case

    // skip to skip the test .only and .skip

    it('Login Test 1', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)').click()
    });

    it('Login Test 2', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)').click()
    });

    /*
   
       if beforeEach inside describe it executes before every it block
       if beforeEach outside it applies to everything inside the specs
       it can put on e2e.js it applies on every test in every specs
    */ 

})

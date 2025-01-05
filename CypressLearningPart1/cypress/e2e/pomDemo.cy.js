const { LoginPage } = require("./pages/loginPage");

const loginPage = new LoginPage();

it('Page Object Demo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
});
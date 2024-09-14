describe('custom command', () =>{
    it('custom command', () => {
        cy.visit('https://www.letskodeit.com/login');
        cy.login('maddalapremkumar9@gmail.com','Prem@123')
        }) 
})
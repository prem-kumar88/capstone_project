describe('Fixture',() => {

    before( function() {
        cy.fixture('myshop').then((data) => {
            this.data = data
        })
    })
    it('use fixtures', function(){
        cy.visit('https://myshop.org.in/')
    cy.get('[class="menu-item top-menu-item top-menu-item-1"]').click() 

   cy.get('iframe[height="275"]').should('be.visible').then( ($iftame)=> {
   const namesTextEmail = $iftame.contents().find('input[name="email"]')
   cy.wrap(namesTextEmail).type(this.data.username)

   const namesTextPassword = $iftame.contents().find('input[name="password"]')
   cy.wrap(namesTextPassword).type(this.data.password)

 const namesTextLogin = $iftame.contents().find('[class="btn btn-primary"]')
   cy.wrap(namesTextLogin).click()
   })
  })
})
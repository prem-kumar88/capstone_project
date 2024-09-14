describe(' 5. User Registration',  () => {
    beforeEach(() => {
      // Visit the homepage for all test cases
   cy.visit('https://myshop.org.in/');
   });
   it('est user registration with valid and invalid inputs', () =>  {

    cy.get('[class="menu-item top-menu-item top-menu-item-2"]').last().click() 

    cy.get('iframe[height="595"]').should('be.visible').then( ($iftame)=> {
    const namesText = $iftame.contents().find('input[name="firstname"]')
    cy.wrap(namesText).type('pr{}()em')

    const namesText1 = $iftame.contents().find('input[name="lastname"]')
    cy.wrap(namesText1).type('kumar')
    const numberText = $iftame.contents().find('input[name="telephone"]')
    cy.wrap(numberText).type('9381834513')

    const emailText = $iftame.contents().find('input[name="email"]')
    cy.wrap(emailText).type('prem12345@gmail.com')

    const passwordText = $iftame.contents().find('input[name="password"]')
    cy.wrap(passwordText).type('prem123')

    const confirmText = $iftame.contents().find('input[name="confirm"]')
    cy.wrap(confirmText).type('prem123')

    const clickItem = $iftame.contents().find('input[class="radio-inline"]').last()

    const checkbox = $iftame.contents().find('input[type="checkbox"]')
    cy.wrap(checkbox).first().check()

    const button = $iftame.contents().find('[class="btn btn-primary"]')
    cy.wrap(button).click()
    
    
    

    })
  })
})
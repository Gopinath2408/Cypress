
import 'cypress-plugin-tab'


describe('My First Test', () =>
{
  it('Launching the website', () => {

    // Launching the website....
    cy.visit("https://automationexercise.com/")
    // cy.title().should('eq','Account Login')
    
    // Entering the UserName and Password....
    cy.get("header[id='header'] li:nth-child(4)").click()
    cy.get("input[data-qa='login-email']").type("vel353826@gmail.com")
    cy.get("input[placeholder='Password']").type("gopi123")
    cy.get("button[data-qa='login-button']").click()


    // To check the log in is successfull
    cy.get("ul[class='nav navbar-nav'] li a b").should('have.text',"gopi")


    // Add the product to the cart
    cy.get("a[href='/products']").click()
    cy.get("body > section:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)").click()

    // Entering the continue shopping button
    cy.get(".btn.btn-success.close-modal.btn-block").click()

    // Navigating to the cart page
    cy.get("body > header:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click()


    //  Navigating to the checkout
    cy.get(".btn.btn-default.check_out").click()

    // Suggestion box
    cy.get("textarea[name='message']").type("This instruction invites the customer to provide any additional information or special requests related to their order by typing it into a provided text box or comment field on a form or webpage.Let me know if you want this rewritten more formally or simply!")
    

    // Place order..
    cy.get(".btn.btn-default.check_out").click()


    // Order Confirmation...
    cy.get("#submit").click()
    cy.get("input[name='name_on_card']").type("ijfjnvn").tab()
    cy.focused().type("1234 5678 9012 3456").tab()
    cy.focused().type("21").tab()
    cy.focused().type("08").tab()
    cy.focused().type("1999").tab()

    cy.focused().click()


    // Checking the order confirmation...
    cy.get("div[class='col-sm-9 col-sm-offset-1'] p").should("contain","Congratulations! Your order has been confirmed!")





  })


  
})

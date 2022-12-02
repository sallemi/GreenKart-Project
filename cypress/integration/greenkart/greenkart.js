import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps'

    //scenario 1 ligne 3
  
    
        
    //scenario 1 ligne 4



    //scenario 1 ligne 5
      Then('display error message', () => {
        cy.get('.no-results > h2').should('have.text', 'Sorry, no products matched your search!')
      })
    

    //scenario 2 ligne 6

    //scenario 2 ligne 7
      When('I choose the non-searched product Cucumber and I increment the quantity of product {int}', (quantity) => {
       for(let pas = 0 ; pas < quantity - 1 ; pas++){
          cy.get('.products > :nth-child(3) > .stepper-input > .increment').click()
          cy.wait(2000)
        }
      })


    //scenario 3 ligne 8



    //scenario 3 ligne 9
      Then('display the basket is empty message', () => {
      cy.get('.cart-preview').get('.empty-cart').should('have.text', 'You cart is empty!You cart is empty!') 
      })


    //scenario 4 ligne 10

  
 
    //scenario 4 ligne 11
  

    //scenario 5 ligne 12
        
        When('I increment the quantity of searched product {int} with button increment', (quantity) => {
          for (let pas = 100; pas < 100 + quantity; pas++) {
            cy.get('.products > .product > .stepper-input').find('.increment').click()
            cy.wait(2000)
          }
        })
        

        Then('display number {int} on the field quantity on the Cucumber product details', (quantity) => {
            cy.get('.products > :nth-child(1) > .stepper-input > .quantity').should('have.value', quantity)
        
        }) 
  
  
        //scenario 5 ligne 13

  When('I increment the quantity of non-searched product {int} with button increment', (quantity) => {
    for (let pas = 0; pas < quantity; pas++) {
      cy.get('.products > :nth-child(3) > .stepper-input').find('.increment').click()
      cy.wait(2000)
    }
  })
  
 
//scenario 6 ligne 14

When('I decrement the quantity of product by {int}', (numberOfDecrement) => {
  for (let pas = 1; pas < numberOfDecrement + 1; pas++) {
    cy.get('.products > .product > .stepper-input').find('.decrement').click()
    cy.wait(2000)
  }
})

//scenario 6 ligne 15

When('I choose the searched product Cucumber and I decrement the quantity of product by {int} with button decrement', (numberOfDecrement) => {
  for(let pas = 0 ; pas < numberOfDecrement ; pas++){
     cy.get('.products > .product > .stepper-input > .decrement').click()
     cy.wait(2000)
   }
 })


 //scenario 7 ligne 16

When('I decrement the quantity of non-searched product Cucumber by {int} with button decrement', (numberOfDecrement) => {
  for(let pas = 0 ; pas < numberOfDecrement ; pas++){
     cy.get('.products > :nth-child(3) > .stepper-input > .decrement').click()
     cy.wait(2000)
   }
 })

 //scenario 7 ligne 17 (false positif)

 When('I choose the non-searched product Carrot and I decrement the quantity of product by {int} with button decrement', (numberOfDecrement) => {
  for(let pas = 0 ; pas < numberOfDecrement ; pas++){
     cy.get('.products > :nth-child(5) > .stepper-input > .decrement').click()
     cy.wait(2000)
   }
 })







  // en commun

  Given('I visit page GreenKart', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
   })

  When('I add the searched product {word} to the Cart', (product)=> { 
    if(product == 'Carrot'){
      cy.get('.products > :nth-child(1) > .product-action > button').click()
      cy.wait(2000)
    }else if(product == 'Cucumber'){
      cy.get('.products > :nth-child(1) > .product-action > button').click()
      cy.wait(2000)
    }
  }) 

  When('I add the non-searched product {word} to the Cart', (product)=> { 
    if(product == 'Carrot'){
      cy.get('.products > :nth-child(5) > .product-action > button').click()
      cy.wait(2000)
    }else if(product == 'Cucumber'){
      cy.get('.products > :nth-child(3) > .product-action > button').click()
      cy.wait(2000)
    }
  })




  Then('display {int} on the field quantity on the {word} product details', (quantity, product) => {
    if(product == 'Carrot'){
      cy.get('.products > :nth-child(1) > .stepper-input > .quantity').should('have.value', quantity)
    }else if(product == 'Cucumber'){
      cy.get('.products > :nth-child(3) > .stepper-input > .quantity').should('have.value', quantity)
    }
  })

  When('I click on the basket icon', ()=> { 
    cy.get('.cart-icon').click()
  }) 

  When('I choose the searched product {word} and I type the quantity of product {int}', (product, quantity) => { 
      cy.get('.products > .product > .stepper-input > .quantity').clear().type(quantity)
  }) 

  When('I choose the non-searched product {word} and I type the quantity of product {int}', (product, quantity) => { 
    if(product == 'Carrot'){
      cy.get('.products > :nth-child(5) > .stepper-input > .quantity').clear().type(quantity)
    }else if(product == 'Cucumber'){
      cy.get('.products > :nth-child(3) > .stepper-input > .quantity').clear().type(quantity)
    }
  }) 

  When('I search keyword {word}', (product)=> { 
    cy.get('.search-keyword').type(product)
    cy.wait(2000)
  })  


  Then('display the product name {string} on the basket', (product) => {
    cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', product + product)
  })


  Then('display the product {word}', (product)=> { 
    if(product == 'Carrot'){
      cy.get('.products > :nth-child(1) > .product-name').should('have.text', 'Carrot - 1 Kg')
    }else if(product == 'Cucumber'){
      cy.get('.products > :nth-child(1) > .product-name').should('have.text', 'Cucumber - 1 Kg')
    }else if(product == 'Capsicum'){  
      cy.get('.products > :nth-child(2) > .product-name').should('have.text', 'Capsicum')
    }
  }) 
  
  
  Then('display the product quantity {int} on the basket', (quantity) => {
    if(quantity == 1){
      cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text', quantity + ' No. ' + quantity + ' No. ') 
    }else if(quantity > 1){
      cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text', quantity + ' Nos. ' + quantity + ' Nos. ') 
    }
  })


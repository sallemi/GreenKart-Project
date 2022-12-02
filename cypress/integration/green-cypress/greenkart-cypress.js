describe('test utilisateur', () => {
    it('scenario 1 ligne 3', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('Carrot')
        cy.wait(5000)

        cy.get('.products > :nth-child(1) > .product-name').should('have.text', 'Carrot - 1 Kg')
        cy.get('.products').children().should('have.length', 1)
    })

    it('scenario 1 ligne 4', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('cu');
        cy.wait(2000)

        cy.get('.products > :nth-child(1) > .product-name').should('have.text', 'Cucumber - 1 Kg')
        cy.get('.products > :nth-child(2) > .product-name').should('have.text', 'Capsicum')
        //le nombre d'elements dans la liste affichée des produits=2
        cy.get('.products').children().should('have.length', 2)
    })

    it('scenario 1 ligne 5', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('.')
        cy.wait(2000)

        cy.get('.no-results > h2').should('have.text', 'Sorry, no products matched your search!')
    })

    it('scenario 2 ligne 6', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('carrot')
        cy.get('.products > :nth-child(1) > .stepper-input > .increment').click()
        cy.wait(2000)
        cy.get('.products > :nth-child(1) > .stepper-input > .increment').click()
        cy.wait(2000)
        cy.get('.product-action > button').click()
        cy.get('.cart-icon').click()

        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Carrot - 1 KgCarrot - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','3 Nos. 3 Nos. ')
        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').should('have.value', 3)
    })

    it('scenario 2 ligne 7', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.products > :nth-child(3) > .stepper-input > .increment').click()
        cy.wait(2000)
        cy.get('.products > :nth-child(3) > .stepper-input > .increment').click()
        cy.wait(2000)
        cy.get('.products > :nth-child(3) > .product-action > button').click()
        cy.get('.cart-icon').click()

        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Cucumber - 1 KgCucumber - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','3 Nos. 3 Nos. ')
        cy.get('.products > :nth-child(3) > .stepper-input > .quantity').should('have.value',3)
    })

    it('scenario 3 ligne 8', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('carrot')
        cy.wait(2000)
        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').clear().type('3')
        cy.get('.products > :nth-child(1) > .product-action > button').click()
        cy.get('.cart-icon').click()

        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Carrot - 1 KgCarrot - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','3 Nos. 3 Nos. ')
        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').should('have.value',3)
    })

    it('scenario 3 ligne 9', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('carrot')
        cy.wait(2000)
        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').clear().type('0')
        cy.get('.products > :nth-child(1) > .product-action > button').click()
        cy.get('.cart-icon').click()

        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').should('have.value',0)
        cy.get('.cart-preview').get('.empty-cart').should('have.text','You cart is empty!You cart is empty!')
    })

    it('scenario 4 ligne 10', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.products > :nth-child(3) > .stepper-input > .quantity').clear().type('5')
        cy.get('.products > :nth-child(3) > .product-action > button').click()
        cy.get('.cart-icon').click()

        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Cucumber - 1 KgCucumber - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','5 Nos. 5 Nos. ')
        cy.get('.products > :nth-child(3) > .stepper-input > .quantity').should('have.value', 5)
    })

    it('scenario 3 ligne 11', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.products > :nth-child(3) > .stepper-input > .quantity').clear().type('0')
        cy.get('.products > :nth-child(3) > .product-action > button').click()
        cy.get('.cart-icon').click() 

        cy.get('.products > :nth-child(3) > .stepper-input > .quantity').should('have.value', 0)
        cy.get('.cart-preview').get('.empty-cart').should('have.text','You cart is empty!You cart is empty!')
    })

    it('scenario 4 ligne 12', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('Cucumber - 1 Kg')
        cy.wait(1000)
        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').clear().type('0')
        cy.get('.products > :nth-child(1) > .stepper-input > .increment').click()
        cy.get('.products > :nth-child(1) > .stepper-input > .increment').click()
        cy.get('.products > :nth-child(1) > .product-action > button').click()
        cy.get('.cart-icon').click()  

        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Cucumber - 1 KgCucumber - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','2 Nos. 2 Nos. ')
        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').should('have.value', 2)
    })

    it('scenario 4 ligne 13', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.products > :nth-child(3) > .stepper-input > .quantity').clear().type('0')
        cy.get('.products > :nth-child(3) > .stepper-input > .increment').click()
        cy.get('.products > :nth-child(3) > .stepper-input > .increment').click()
        cy.get('.products > :nth-child(3) > .stepper-input > .increment').click()
        cy.get('.products > :nth-child(3) > .product-action > button').click()
        cy.get('.cart-icon').click() 

        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Cucumber - 1 KgCucumber - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','3 Nos. 3 Nos. ')
        cy.get('.products > :nth-child(3) > .stepper-input > .quantity').should('have.value', 3)
    })

    it('scenario 5 ligne 14', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('Cucumber - 1 Kg')
        cy.wait(1000)
        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').clear().type('2')
        cy.get('.products > :nth-child(1) > .stepper-input > .decrement').click()
        cy.get('.products > :nth-child(1) > .product-action > button').click()
        cy.get('.cart-icon').click()  
        
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Cucumber - 1 KgCucumber - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','1 No. 1 No. ')
        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').should('have.value', 1)
    })

    it('scenario 5 ligne 15', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('Cucumber - 1 Kg')
        cy.wait(1000)
        cy.get('.products > :nth-child(1) > .stepper-input > .decrement').click()
        cy.get('.products > :nth-child(1) > .product-action > button').click()
        cy.get('.cart-icon').click() 

        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Cucumber - 1 KgCucumber - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','1 No. 1 No. ')
        cy.get('.products > :nth-child(1) > .stepper-input > .quantity').should('have.value', 1)
    })

    it('scenario 5 ligne 16', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.products > :nth-child(3) > .stepper-input > .quantity').clear().type('2')
        cy.get('.products > :nth-child(3) > .stepper-input > .decrement').click()
        cy.get('.products > :nth-child(3) > .product-action > button').click()
        cy.get('.cart-icon').click() 

        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Cucumber - 1 KgCucumber - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','1 No. 1 No. ')
        cy.get('.products > :nth-child(3) > .stepper-input > .quantity').should('have.value',1)
    })

    it('scenario 5 ligne 17', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.products > :nth-child(5) > .product-name').should('have.text', 'Carrot - 1 Kg')
        cy.get('.products > :nth-child(5) > .stepper-input > .decrement').click()
        cy.get('.products > :nth-child(5) > .product-action > button').click()
        cy.get('.cart-icon').click()

        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-info > .product-name').should('have.text', 'Carrot - 1 KgCarrot - 1 Kg')
        cy.get('.cart > .cart-preview').get('.cart-items').first().get('.product-total > .quantity').should('have.text','1 No. 1 No. ')
        cy.get('.products > :nth-child(5) > .stepper-input > .quantity').should('have.value', 1)
    })
})

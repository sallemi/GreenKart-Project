Feature: GreenKart website

Scenario: scenario 1 ligne 3
  Given I visit page GreenKart

  When I search keyword Carrot

  Then display the product "Carrot"
  

Scenario: scenario 1 ligne 4
  Given I visit page GreenKart 

  When I search keyword Cu
  
  Then display the product "Cucumber"
  And display the product "Capsicum"


Scenario: scenario 1 ligne 5
  Given I visit page GreenKart 

  When I search keyword .
  
  Then display error message


Scenario: scenario 2 ligne 6
  Given I visit page GreenKart 

  When I search keyword Carrot
  And  I choose the searched product Carrot and I type the quantity of product 3
  And  I add the searched product Carrot to the Cart
  And  I click on the basket icon

  Then  display the product name "Carrot - 1 Kg" on the basket
  Then  display the product quantity 3 on the basket 
  Then  display 3 on the field quantity on the Carrot product details

 
Scenario: scenario 2 ligne 7
  Given I visit page GreenKart 

  When I choose the non-searched product Cucumber and I increment the quantity of product 3
  And  I add the non-searched product Cucumber to the Cart
  And  I click on the basket icon
 
  Then  display the product name "Cucumber - 1 Kg" on the basket
  Then  display the product quantity 3 on the basket 
  Then  display 3 on the field quantity on the Cucumber product details


Scenario: scenario 3 ligne 8
  Given I visit page GreenKart 

  When I search keyword Carrot
  And  I choose the searched product Carrot and I type the quantity of product 3
  And  I add the searched product Carrot to the Cart
  And  I click on the basket icon

  Then  display the product name "Carrot - 1 Kg" on the basket
  Then  display the product quantity 3 on the basket 
  Then  display 3 on the field quantity on the Carrot product details
  



Scenario: scenario 3 ligne 9
  Given I visit page GreenKart 

  When I search keyword Carrot
  And  I choose the searched product Carrot and I type the quantity of product 0
  And  I add the searched product Carrot to the Cart
  And  I click on the basket icon
  
  Then display 0 on the field quantity on the Carrot product details
  Then display the basket is empty message


Scenario: scenario 4 ligne 10
  Given I visit page GreenKart

  When I choose the non-searched product Cucumber and I type the quantity of product 5
  And  I add the non-searched product Cucumber to the Cart
  And  I click on the basket icon

  Then  display the product name "Cucumber - 1 Kg" on the basket
  Then  display the product quantity 5 on the basket 
  Then  display 5 on the field quantity on the Cucumber product details

Scenario: scenario 4 ligne 11
  Given I visit page GreenKart

  When I choose the non-searched product Cucumber and I type the quantity of product 0
  And  I add the non-searched product Cucumber to the Cart
  And  I click on the basket icon

  Then  display 0 on the field quantity on the Cucumber product details
  Then  display the basket is empty message

Scenario: scenario 5 ligne 12
  Given I visit page GreenKart

  When I search keyword Cucumber
  And  I choose the searched product Cucumber and I type the quantity of product 0
  And  I increment the quantity of searched product 2 with button increment
  And  I add the searched product Cucumber to the Cart
  And  I click on the basket icon

  Then  display the product name "Cucumber - 1 Kg" on the basket
  Then  display the product quantity 2 on the basket 
  Then  display number 2 on the field quantity on the Cucumber product details

Scenario: scenario 5 ligne 13
  Given I visit page GreenKart

  When I choose the non-searched product Cucumber and I type the quantity of product 0
  And  I increment the quantity of non-searched product 3 with button increment
  And  I add the non-searched product Cucumber to the Cart
  And  I click on the basket icon

  Then  display the product name "Cucumber - 1 Kg" on the basket
  Then  display the product quantity 3 on the basket 
  Then  display 3 on the field quantity on the Cucumber product details

Scenario: scenario 6 ligne 14
  Given I visit page GreenKart

  When I search keyword Cucumber
  And  I choose the searched product Cucumber and I type the quantity of product 2
  And  I decrement the quantity of product by 1 
  And  I add the searched product Cucumber to the Cart
  And  I click on the basket icon

  Then  display the product name "Cucumber - 1 Kg" on the basket
  Then  display the product quantity 1 on the basket 
  Then  display number 1 on the field quantity on the Cucumber product details

Scenario: scenario 6 ligne 15
  Given I visit page GreenKart

  When I search keyword Cucumber
  And  I choose the searched product Cucumber and I decrement the quantity of product by 1 with button decrement
  And  I add the searched product Cucumber to the Cart
  And  I click on the basket icon

  Then  display the product name "Cucumber - 1 Kg" on the basket
  Then  display the product quantity 1 on the basket 
  Then  display number 1 on the field quantity on the Cucumber product details


Scenario: scenario 7 ligne 16
  Given I visit page GreenKart

  When I choose the non-searched product Cucumber and I type the quantity of product 2
  And  I decrement the quantity of non-searched product Cucumber by 1 with button decrement
  And  I add the non-searched product Cucumber to the Cart
  And  I click on the basket icon

  Then  display the product name "Cucumber - 1 Kg" on the basket
  Then  display the product quantity 1 on the basket 
  Then  display 1 on the field quantity on the Cucumber product details


Scenario: scenario 7 ligne 17
  Given I visit page GreenKart

  When I choose the non-searched product Carrot and I decrement the quantity of product by 1 with button decrement
  And  I add the non-searched product Carrot to the Cart
  And  I click on the basket icon

  Then  display the product name "Carrot - 1 Kg" on the basket
  Then  display the product quantity 1 on the basket 
  Then  display 1 on the field quantity on the Carrot product details

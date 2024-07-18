Feature: Validate successful purchase text

  Scenario: Successful purchase
    Given I visit the "https://www.saucedemo.com/" page
    And I login as 'standard_user'
    And I add the backpack to the cart
    When I select the cart (top-right)
    And I select Checkout
    And I fill in the First Name, Last Name, and Zip/Postal Code
    And I select Continue
    And I select Finish
    Then I should see the text 'Thank you for your order!'


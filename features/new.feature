Feature: Login and verify product details on SauceDemo website

Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Login and verify product details
    Given I login as 'standard_user'
    When  I click on any product
    Then the product details should reflect the selected product name

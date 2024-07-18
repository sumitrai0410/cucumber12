Feature: Validate product sorting by price

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort>
    Given I login as 'standard_user'
    When I sort the items by <sort>
    Then I validate all items are sorted correctly by price <sort>

  Examples:
    | sort            |
    | Price (low to high) |
    | Price (high to low) |

@featuretest
Feature: This feature file will validate products prices

  Background: Open the SauceDemo Application
    Given I open the login page of SauceDemo Application
    And I enter the username "standard_user"
    And I enter the password "secret_sauce"
    Then I click Login Button

	@Sanity
  Scenario: Validate the Product Prices
    When User is on Product Page
   	Then check Price for below Product name
      | Sauce Labs Bike Light    | $9.99  |
      | Sauce Labs Bolt T-Shirt  | $15.99 |
      | Sauce Labs Fleece Jacket | $49.99 |

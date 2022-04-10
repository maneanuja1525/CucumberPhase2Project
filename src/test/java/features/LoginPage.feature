@featuretest
Feature: This feature file will automate the Login Page for SauceDemo Application

  Background: Open an application
    Given I open the SauceDemo application in browser

  @Sanity
  Scenario Outline: Validate the Login Success scenario using multiple users
    When I come to the login page
    And I enter the username "<Username>"
    And I enter the password "<Password>"
    And I click on the login Button
    Then I should be landed on the Home Page

    Examples: 
      | Username      | Password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |

  @Regression
  Scenario Outline: Validate the Login Failure scenario
    When I come to the login page
    And I enter the username "<Username>"
    And I enter the password "<Password>"
    And I click on the login Button
    Then I should get "<Error>" Message

    Examples: 
      | Username      | Password        | Error                                                                     |
      | standard_user | secret_sauce123 | Epic sadface: Username and password do not match any user in this service |

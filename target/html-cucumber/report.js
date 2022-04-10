$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/LoginPage.feature");
formatter.feature({
  "name": "This feature file will automate the Login Page for SauceDemo Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@featuretest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate the Login Success scenario using multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I come to the login page",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the username \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be landed on the Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open an application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the SauceDemo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.open_SauceDemo_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login Success scenario using multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@featuretest"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I come to the login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.loginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"standard_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_Username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open an application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the SauceDemo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.open_SauceDemo_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login Success scenario using multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@featuretest"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I come to the login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.loginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"problem_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_Username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Login Failure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I come to the login page",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the username \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get \"\u003cError\u003e\" Message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce123",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "Open an application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the SauceDemo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.open_SauceDemo_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login Failure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@featuretest"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I come to the login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.loginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"standard_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_Username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get \"Epic sadface: Username and password do not match any user in this service\" Message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.validateErrorMsg(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/ProductsPage.feature");
formatter.feature({
  "name": "This feature file will validate products prices",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@featuretest"
    }
  ]
});
formatter.background({
  "name": "Open the SauceDemo Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the login page of SauceDemo Application",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductSteps.i_open_the_login_page_of_SauceDemo_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"standard_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_Username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSteps.i_click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Product Prices",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@featuretest"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User is on Product Page",
  "keyword": "When "
});
formatter.match({
  "location": "ProductSteps.user_is_on_Product_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check Price for below Product name",
  "rows": [
    {
      "cells": [
        "Sauce Labs Bike Light",
        "$9.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt",
        "$15.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket",
        "$49.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSteps.check_Price_for_below_Product_name(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
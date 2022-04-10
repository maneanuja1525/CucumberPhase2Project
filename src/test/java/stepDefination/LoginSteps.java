package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.*;

public class LoginSteps {

	WebDriver driver=BaseClass.driver;
	@Given("I open the SauceDemo application in browser")
	public void open_SauceDemo_Application()
	{
		driver.get("https://www.saucedemo.com/");
	}

	@When("I come to the login page") 
	public void loginPage()
	{
	    System.out.println("Inside the Login Page");
	}

	@When("I enter the username {string}")
	public void enter_Username(String usernameVal){
	    // Write code here that turns the phrase above into concrete actions
	    WebElement username=driver.findElement(By.xpath("//input[@id='user-name']"));
	    username.sendKeys(usernameVal);
	}
	@When("I enter the password {string}")
	public void enter_Password(String passwordVal) 
	{
	    WebElement password=driver.findElement(By.xpath("//input[@id='password']"));
	    password.sendKeys(passwordVal);
	} 
	@When("I click on the login Button")
	public void click_on_LoginButton() 
	{
	    WebElement loginButton=driver.findElement(By.xpath("//input[@id='login-button']"));
	    loginButton.click();
	} 

	@Then("I should be landed on the Home Page")
	public void HomePage()		
	{
		System.out.println("Login Successful");
		String ExpectedText="PRODUCTS";
	    WebElement VarifyPageText=driver.findElement(By.xpath("//span[text()='Products']"));
	    String ActualText=VarifyPageText.getText();
		Assert.assertEquals(ExpectedText,ActualText);
	}	
	@Then("I should get {string} Message")
	public void validateErrorMsg(String ExpMsg){
	    // Write code here that turns the phrase above into concrete actions
	   WebElement ErrorMsg=driver.findElement(By.xpath("//div[@class='error-message-container error']//h3"));
	   String ActualMsg=ErrorMsg.getText();
	   Assert.assertEquals(ExpMsg, ActualMsg);
	   System.out.println("Login Failed! Please check login credentials");
	}
}

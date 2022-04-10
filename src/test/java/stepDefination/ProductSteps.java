package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.junit.*;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ProductSteps {
	
	WebDriver driver=BaseClass.driver;
	
	@Given("I open the login page of SauceDemo Application")
	public void i_open_the_login_page_of_SauceDemo_Application() {
		driver.get("https://www.saucedemo.com/");
	}

	@Then("I click Login Button")
	public void i_click_Login_Button() {
		WebElement loginButton=driver.findElement(By.xpath("//input[@id='login-button']"));
	    loginButton.click();
	}

	@When("User is on Product Page")
	public void user_is_on_Product_Page() {
		String ExpectedText="PRODUCTS";
	    WebElement VarifyPageText=driver.findElement(By.xpath("//span[text()='Products']"));
	    String ActualText=VarifyPageText.getText();
		Assert.assertEquals(ExpectedText,ActualText);
		System.out.println("Inside the Products Page");
	}

	@Then("check Price for below Product name")
	public void check_Price_for_below_Product_name(DataTable dataTable) {
		
		int rows=dataTable.height();
		
		for(int i=0;i<rows;i++) {
			String Product=dataTable.cell(i, 0);
			String ExpectedPrice=dataTable.cell(i, 1);
			WebElement Price=driver.findElement(By.xpath("//div[text()='"+Product+"']/following::div[@class='inventory_item_price'][1]"));
			String ActualPrice=Price.getText();
			Assert.assertEquals(ExpectedPrice,ActualPrice);
		}
	}

}

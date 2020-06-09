package com.zerobank.stepdefinitions;

import com.zerobank.pages.LoginPage;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class LoginDefs {

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("the user enters valid credentials")
    public void the_user_enters_valid_credentials() {
        new LoginPage().login();
    }

    @Then("the system should display {string} page")
    public void the_system_should_display_page(String expectedTitle) {

        String actualTitle = Driver.get().getTitle();

        System.out.println("actualTitle = " + actualTitle);

        Assert.assertEquals("Verify the title",expectedTitle,actualTitle);

    }

    @When("the user enters {string} and {string}")
    public void the_user_enters_and(String username, String password) {

        new LoginPage().loginInvalid(username,password);

    }

    @Then("the system should display {string}")
    public void the_system_should_display(String expectedErrorMessage) {

        String actualErrorMessage = new LoginPage().errorMessage.getText();
        System.out.println("actualErrorMessage = " + actualErrorMessage);

        Assert.assertEquals("Verify error message",expectedErrorMessage,actualErrorMessage);

    }




}

package com.zerobank.pages;

import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy (id = "signin_button")
    public WebElement signinBtn;

    @FindBy (id = "user_login")
    public WebElement usernameInbox;

    @FindBy (id = "user_password")
    public WebElement passwordInbox;

    @FindBy (name = "submit")
    public WebElement submit;

    @FindBy (css = ".alert.alert-error")
    public WebElement errorMessage;


    public void login(){
        signinBtn.click();
        usernameInbox.sendKeys(ConfigurationReader.get("username"));
        passwordInbox.sendKeys(ConfigurationReader.get("password"));
        submit.click();
    }

    public void loginInvalid(String username, String password){

        signinBtn.click();
        usernameInbox.sendKeys(username);
        passwordInbox.sendKeys(password);
        submit.click();

    }



}

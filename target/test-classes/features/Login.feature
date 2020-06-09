Feature: Login Functionality



  Scenario: Login with valid credentials
    Given the user is on the login page
    When the user enters valid credentials
    Then the system should display "Zero - Account Summary" page


  @wip
  Scenario Outline: Trying to Login with invalid credentials
    Given the user is on the login page
    When the user enters "<username>" and "<password>"
    Then the system should display "Login and/or password are wrong."

    Examples:
      | username      | password      |
      | username      | wrongpassword |
      | wrongusername | password      |
      |               | password      |
      | username      |               |
      |               |               |



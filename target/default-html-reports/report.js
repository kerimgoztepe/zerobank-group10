$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Trying to Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the system should display \"Login and/or password are wrong.\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "username",
        "wrongpassword"
      ]
    },
    {
      "cells": [
        "wrongusername",
        "password"
      ]
    },
    {
      "cells": [
        "",
        "password"
      ]
    },
    {
      "cells": [
        "username",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Trying to Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"username\" and \"wrongpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display \"Login and/or password are wrong.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_system_should_display(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Trying to Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"wrongusername\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display \"Login and/or password are wrong.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_system_should_display(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Trying to Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display \"Login and/or password are wrong.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_system_should_display(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Trying to Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"username\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display \"Login and/or password are wrong.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_system_should_display(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Trying to Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should display \"Login and/or password are wrong.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginDefs.the_system_should_display(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});
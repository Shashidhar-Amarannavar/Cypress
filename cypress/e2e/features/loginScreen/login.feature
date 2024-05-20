Feature: Verify login screen

  @regressionTest
  Scenario: Login to the application
    Given user in login screen
    When user enter the email and password
    Then Verify popup "Successfully logged in."

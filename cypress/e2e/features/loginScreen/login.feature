Feature: Verify login screen

  @regressionTest
  Scenario: Login to the application
    Given user in login screen
    When user enter the email and password
    Then Verify popup "Successfully logged in."

  @loginScreen
  Scenario Outline: Login to the application
    Given user in login screen
    When user enter the "<email>" and "<password>"
    Then Verify popup "<message>"

    Examples:
      | email                                 | password    | message                        |
      | shashidhar.amar  | Shashi#123  | Successfully logged in.        |
      | shashidhar.amar  | Shashi#1231 | Wrong password entered.        |
      | shashidhar.amar | Shashi#123  | No user found. Please sign up. |
      | shashidhar.amar | Shashi#1231 | No user found. Please sign up. |

  @loginScreen @validationEmailAndPassword
  Scenario Outline: Verify the email and password textbox validation message
    Given user in login screen
    When user enter the wrong "<email>" and "<password>"
    Then Verify the textbox "<validation message>"

    Examples:
      | email                  | password  | validation message                 |
      | shashidhar.amarannavar |           | Please enter a valid email address |
      |                        | Shashi#12 | Please enter your password         |
      |                        |           | Please enter your email            |

Feature: Verify the signUp page.

  @loginScreen @signUp
  Scenario Outline: Create account and verify the toast message
    Given user in login screen
    When user in lagin page and click on signUp
    And fill all details with "<emailId>" and "<password>"
    And click on signUp button
    Then Verify popup "<created>"
    When navigate to back
    And fill all details with "<emailId>" and "<password>"
    And click on signUp button
    Then Verify popup "<exists>"

    Examples: 
      | emailId    | password | created                                                     | exists                              |
      | @gmail.com | #123     | User has been created successfully.Please verify the email. | User already exists please sign in. |

 
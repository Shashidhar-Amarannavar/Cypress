Feature: Verifying organization module

  @OrganizationScreen @regression
  Scenario Outline: create new organization
    Given user in login screen
    When user enter the email and password
    Then Verify popup "Successfully logged in."
    When create new organization "<organization name>","<description>" and "<file location>"
    Then Verify popup "<message>"

    Examples: 
      | message                                     | organization name | description                       | file location                |
      | Organsiation has been created successfully. | Softsuave org     | Verify to create new organization | uploadFiles/profilePhoto.png |
      | Organization already present                | Softsuave org     | Verify to create new organization | uploadFiles/profilePhoto.png |
      | Please Upload Your Organization Logo!       | Softsuave org     | Verify to create new organization |                              |

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
      | Organsiation has been created successfully. | Shashidhar org     | Verify to create new organization | uploadFiles/profilePhoto.png |
      | Organization already present                | Shashidhar org     | Verify to create new organization | uploadFiles/profilePhoto.png |
      | Please Upload Your Organization Logo!       | Shashidhar org     | Verify to create new organization |                              |

  @OrganizationScreen
  Scenario Outline: Edit the existing organization name
    Given user in login screen
    When user enter the email and password
    Then Verify popup "Successfully logged in."
    When edit the organization "<old name>","<new name>" and "<description>"
    Then Verify popup "<message>"

    Examples:
      | message                           | old name      | new name          | description          |
      | Organisation updated successfully | Shashidhar org | Shashidhar new org | Changing description |

  @OrganizationScreen @regression
  Scenario Outline: Delete the organization and verify toast message
    Given user in login screen
    When user enter the email and password
    Then Verify popup "Successfully logged in."
    When delete organization "<name>"
    Then Verify popup "<message>"

    Examples:
      | message                           | name              |
      | Organisation Deleted Successfully | Shashidhar new org |

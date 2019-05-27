Feature: Login
  Scenario: Successful login of a user
    Given a user with name 'Kostas' and password 'test' is already enrolled
    When the user logs into with name 'Kostas' and password 'test'
    Then the user is logged in

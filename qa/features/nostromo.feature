Feature: Hello Page

   Hello page load and functionality tests

   Scenario: Load Hello Page
    Given I am on the start page
    Then I should see greeting lebel
    And I should see input field 
    And I should see go button

   Scenario: Verify Post Request
    Given I am on the start page
    When I typed 'Dear user' into input field
    And I clicked go button
    Then I should see 'Welcome to the system, Dear user'


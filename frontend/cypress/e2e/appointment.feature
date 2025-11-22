Feature: Appointment Booking
  Scenario: Patient books an appointment
    Given I am on the home page
    When I select a doctor "Dr. Smith"
    And I choose a time "10:00 AM"
    And I click "Book Appointment"
    Then I should see a confirmation message "Appointment Booked"

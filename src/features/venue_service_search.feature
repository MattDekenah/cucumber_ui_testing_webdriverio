Feature: Searching for a service

    Background:

        Given I am on the venue page with services matching my search

    Scenario: Selecting a matching service
        When I select "ELEMIS Power Booster"
        Then I expect "ELEMIS Power Booster" to get selected in the "Browse services" section
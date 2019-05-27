Feature: Movie
  Scenario: a user can submit a movie by completing a form
    Given I am already logged in
    When I submit a movie
    Then the movie is persisted
    And I am referenced as its submitter

  Scenario: a user can like a movie submitted by another user
    Given I am already logged in
    And another user has submitted a movie
    When I like the movie
    Then the like operation should complete

  Scenario: a user can hate a movie submitted by another user
    Given I am already logged in
    And another user has submitted a movie
    When I hate the movie
    Then the hate operation should complete

  Scenario: a user cannot like a movie that he has submitted
    Given I am already logged in
    And I have submitted a movie
    When I like the movie
    Then the like operation should not complete

  Scenario: a user cannot hate a movie that he has submitted
    Given I am already logged in
    And I have submitted a movie
    When I hate the movie
    Then the hate operation should not complete

  Scenario: a user cannot hate a movie that he has already hated
    Given I am already logged in
    And another user has submitted a movie
    And I have already hated the movie
    When I hate the movie
    Then the hate operation should not complete

  Scenario: a user cannot like a movie that he has already liked
    Given I am already logged in
    And another user has submitted a movie
    And I have already liked the movie
    When I like the movie
    Then the like operation should not complete

  Scenario: a user can retract the vote on a movie
    Given I am already logged in
    And another user has submitted a movie
    And I have already liked the movie
    When I retract my vote
    Then the retract operation should complete

  Scenario: a user can change his vote on a movie
    Given I am already logged in
    And another user has submitted a movie
    And I have already voted the movie
    When I change my vote
    Then the change vote operation should complete
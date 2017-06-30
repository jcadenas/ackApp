# ackApp

[Ack!][heroku]

ackApp is a web application inspired by Slack built using Ruby on Rails
and React/Redux.

[heroku]: https://ack-app.herokuapp.com/#/

## Features & Implementation

ackApp is a web application inspired by Slack built using Ruby on Rails
and React/Redux.  

### Authentication
Features:
- Front end authentication with password encryption.
- Ability to Create a new account.
- Ability to Log In to a pre-existing account.
- Ability to extend session across multiple visits.


### Teams
Features:
- Ability to Create Teams where an organization can live.
-- On Team creation, a 'general' channel is automatically created and the owner is automatically subscribed.
- The user that creates the team is the owner. The owner has the opportunity to:
-- Edit the current team details.
-- Delete the team, resulting in the deletion of any channels and messages pertaining to the team.
-- Add a user to the team.  Teams aren't fun alone. Any added users automatically are subscribed to the team's general channel.
- A user that is a member of the team ( was added and is not the owner ) has the option to leave the team
- As a user, you can be a part of multiple teams. Through the app, you can traverse through the teams you are a part of.


### Channels

Features
- Within a team, a user has the ability to chat in Channels.
- As a user you can create a new channel.  When the channel is created, you are automatically subscribed to that channel.
- As a user, you can navigate the channels within the Team and join the ones you'd like to chat in.

### Phase 2: Teams (2 day)

**Objective:** Channels belong to Teams that can be created, read, updated & destroyed through the API.

### Phase 3: Channels (2 days)

**Objective:** Messages belong to Channels that can be created, read, updated & destroyed through the API.

### Phase 4: Messages Model, API, and components (2 days)

**Objective:**  Messages can be created, read, updated & destroyed through the API.

### Phase 5: Live Messages (1 day)

**Objective:** Integrate websockets in order to see live updates.

### Phase 6: Polish (1 day, W2 Th 6pm)

**Objective:** Apply thorough CSS styling to make product presentational

### Bonus Features (TBD)
- [ ] Notifications
- [ ] Emoji response on messages
- [ ] Integrate with Giphy

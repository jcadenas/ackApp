# Ack!
### created by: Julian Cadenas

[Ack!][live]

Ack! is a full-stack single page web app inspired by [Slack][slack] complete with user authentication, teams, channels and live messaging.  The application is built using Ruby on Rails and React / Redux.
* Built custom secure user authentication leveraging BCrypt for password hashing & live messaging through web sockets via Pusher.
* Utilized Redux to manage modal display in order to allow for simple rendering of DRY reusable modals throughout the application.
* Created reusable React components improving code maintainability and scalability.


[live]: http://www.ack-app.com/#/
[slack]: https://www.slack.com


## Instructions

Ack! is a full-stack single page web app inspired by [Slack][slack] complete with user authentication, teams, channels and live messaging.  Create a team for you and your coworkers, create channels to organize your discussion, send live messages get your work done.



### User Authentication

On entering the site, you will land on the landing page.  Here, you can learn a little about Ack! and create a new account, login to a prexisting account, or enter the Demo Account (a magician named, G.O.B.)

#### Account Creation

![Alt Text](https://media.giphy.com/media/3o7aD60sCx93TkzO6Y/giphy.gif)

When opting to create a new account, the user will be directed to a protected signup route.

Here a user can select a user name and password. On submission, validations are run on the backend and error messages will be displayed to direct the user to an appropriate username & password.

BCrypt is used for password hashing in order to store a password-digest allowing secure user authentication.

Once the account is created, a session is started by storing a session token on the front end and on the user's account.

On creation of a new account, the user will be directed to the on boarding experience which directs the user to create a Team.

On creation of a new Team, a `general` channel will be automatically created and added to the team and the User's Channels.

#### Login

![Alt Text](https://media.giphy.com/media/26n7aCsZ2aH6JzZhS/giphy.gif)

When logging in, a user will enter their credentials and the backend will confirm their credentials. BCrypt is used to validate the user's password-digest.

If valid credentials are supplied, a session is started by storing a session token on the front end and on the user's account.

#### Logout

When logging out, the user's session token is reset and the session token on the browser is cleaned by being set to null.

### Teams & Channels

![Alt Text](https://media.giphy.com/media/l378eMan4xnFFjsqI/giphy.gif)

A Team is a collection of Channels.  Each Team will have one owner who is the creator of that team.  The owner has additional privileges such as editing the team information and adding users to the team.

A user can be a part of many teams.

Any user can create a Channel.  A Channel is a method of organizing the conversation within your team. Any user can join any Channel by selecting `CHANNELS` on the left navigation.

### Live Messaging

![Alt Text](https://media.giphy.com/media/3ohhwF1Cpr3zyIibYs/giphy.gif)

Within each channel, a user can send a message.  Messaging makes use of web sockets via Pusher so that the messages component displays all relevant messages as they occur.

## How to run

### Steps to Setup

This is a Ruby on Rails app with React / Redux.

1. Install Dependencies
    1. Install gem dependencies by running `bundle install`
    2. Install npm dependencies by running `npm install` -- npm will webpack post installing.
2. Setup database
    1.  Uses a postgres database
    2.  Setup the database by running `bundle exec rake db:setup`
        The seed data is bits and pieces of the transcript of Episdoe 1 Season 1 of Arrested Development.
3. Start server
    1. Start server by running `bundle exec rails server`

## Implementation
### Tech Stack
* Postgres database
* Ruby on Rails
* Web Sockets
* React
* Redux
* HTML / CSS

## Coming Soon

* Direct Messaging
* @ Mentions


Enjoy!

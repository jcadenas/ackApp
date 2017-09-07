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

![Alt Text](https://media.giphy.com/media/3ohhwF1Cpr3zyIibYs/giphy.gif)

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



## How to run

### Steps to Setup

This is a Ruby on Rails app with React / Redux, using D3 for the DOM manipulation for the visualizations

1. Install Dependencies
    1. Install gem dependencies by running `bundle install`
    2. Install npm dependencies by running `npm install` -- npm will webpack post installing.
2. Setup database
    1.  Uses a postgres database
    2.  Setup the database by running `bundle exec rake db:setup`
        The seed data is available in csv files. Seeding the database can take upwards of 35 minutes due to the large script lines csv (turns out, a lot has been said over 26 seasons and 6,722 characters)
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


### Schema & Database Seeding


There are 4 tables
- characters
- locations
- episodes
- script lines

A good amount of cleaning is required to ingest these into active record. I did a few runs to remove unnecessary commas and quotations, as well as remove excess columns.

It's a postgres database - Once the seed data is good to go seeding in total can take around 35 minutes.  The script lines table is a doozy (and very awesome)

### Data Visualization Components

Currently, each type of chart is it's own React component.  The charts are broken out by Overview charts & Character charts.

The character charts adhere to D3's enter, update, exit cycle when navigating between characters in order to have DRY reusable components.

### Routes

Currently, each chart has a custom route where SQL is executed on the backend.  In the future, I would like to make more generic routes and potentially handle the building of the charts within each component. We shall see...

## Coming Soon

* Additional interesting views are in the works focusing around character correlations with IMDB rating

## Shout Outs

The project found inspiration from a post by Todd W. Schneider ([Simpsons by the data][todd]) - Awesome stuff and it's been fun to expand upon the idea!

Additionally, thanks to thomasdafoestudio.blogspot.com ([blog][dafoe]) for the assets.

## Disclaimer

I don't know how to write disclaimers, but here it goes.  Just a heads up, I do not own The Simpsons or these assets nor am I affiliated with 20th Century Fox in any capacity.  This is just for fun :)  The ideas and stuff are my own.

Did I disclaim? I hope that disclaimed.

Enjoy!

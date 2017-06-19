# DB Schema

## User

| column          | type     | database-level validations | model-level validations |
|-----------------|----------|----------------------------|-------------------------|
| username        | `string` |    `null-false`            |   `unique` `presence`   |
| password_digest | `string` |    `null-false`            |   `unique` `presence`   |
| session_token   | `string` |    `null-false`            |   `unique` `presence`   |

*User Model Associations:*
- **Has Many**
  - Rosters
  - Teams through Rosters
  - Subscriptions
  - Channels through Subscriptions
  - Messages


## Channel

| column      | type      | database-level validations | model-level validations |
|-------------|-----------|----------------------------|-------------------------|
| name        | `string`  |    `null-false`            |   `unique` `presence`   |
| topic     | `string`  |                            |                         |

*Channel Model Associations:*
- **Has Many**
  - Subscriptions
  - Members(users) through Subscriptions
  - Messages


## Subscription

| column     | type      | database-level validations | model-level validations |
|------------|-----------|----------------------------|-------------------------|
| user_id    | `integer` |    `null-false`            |      `presence`         |
| channel_id | `integer` |    `null-false`            |      `presence`         |

*Subscription Model Associations:*
- **Belongs To**
- User
- Channel

## Team

| column      | type      | database-level validations | model-level validations |
|-------------|-----------|----------------------------|-------------------------|
| name        | `string`  |    `null-false`            |   `unique` `presence`   |
| purpose     | `string`  |                            |                         |

*Team Model Associations:*
- **Has Many**
  - Rosters
  - Users through Rosters
  - Channels

## Roster

| column     | type      | database-level validations | model-level validations |
|------------|-----------|----------------------------|-------------------------|
| user_id    | `integer` |    `null-false`            |      `presence`         |
| team_id    | `integer` |    `null-false`            |      `presence`         |

*Subscription Model Associations:*
- **Belongs To**
- User
- Team


## Message

| column     | type      | model-level validations  |
|------------|-----------|--------------------------|
|  body      | `string`  |                          |
| user_id    | `integer` | `presence`               |
| channel_id | `integer` | `presence`               |

*Message Model Associations:*
- **Belongs To**
  - User
  - Channel

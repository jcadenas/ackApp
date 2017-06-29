# DB Schema

## User

| column          | type     | database-level validations | model-level validations |
|-----------------|----------|----------------------------|-------------------------|
| username        | `string` |    `null-false`            |   `unique` `presence`   |
| password_digest | `string` |    `null-false`            |    `presence`           |
| session_token   | `string` |    `null-false`            |    `presence`           |

*User Model Associations:*
- **Has Many**
  - memberships
  - Teams through memberships
  - Teams directly through Team's Owner_id
  - Subscriptions
  - Channels through Subscriptions
  - Messages


## Channel

| column      | type      | database-level validations | model-level validations |
|-------------|-----------|----------------------------|-------------------------|
| name        | `string`  |       `null-false`         |   `unique` `presence`   |
| purpose     | `string`  |                            |                         |
| team_id     | `integer` |                            |                         |

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
| description | `string`  |                            |                         |
| owner_id    | `integer` |    `null-false`            |      `presence`         |

*Team Model Associations:*
- **Has Many**
  - memberships
  - Users through memberships
  - Channels
- **Belongs To**
  - User (owner_id)

## Membership

| column     | type      | database-level validations | model-level validations |
|------------|-----------|----------------------------|-------------------------|
| user_id    | `integer` |    `null-false`            |      `presence`         |
| team_id    | `integer` |    `null-false`            |      `presence`         |

*Membership Model Associations:*
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

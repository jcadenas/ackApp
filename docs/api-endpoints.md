# API Endpoints

## HTML API

### Root

- `GET /` - loads React app

## JSON API

### Users

- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users/:id`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Channels

* `GET /api/channels`
* `POST /api/channels`
* `GET /api/channels/:id`
* `PATCH /api/channels/:id`
* `DELETE /api/channels/:id`

### Teams

* `GET /api/teams`
* `POST /api/teams`
* `GET /api/teams/:id`
* `PATCH /api/teams/:id`
* `DELETE /api/teams/:id`

### Subscriptions

* `GET /api/subscriptions/`
* `POST /api/subscriptions/`
* `DELETE /api/subscriptions/:channelId`

### Rosters

* `GET /api/rosters/`
* `POST /api/rosters/`
* `DELETE /api/rosters/:teamId`


### Messages

* `GET /api/channels/:id/messages`
* `POST /api/channels/:id/messages`

* `PATCH /api/messages/:id`
* `DELETE /api/messages/:id`

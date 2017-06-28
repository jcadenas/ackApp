json.extract! user, :username, :id
json.teams_by_id user.teams.map(&:id)
json.channels_by_id user.channels.map(&:id)

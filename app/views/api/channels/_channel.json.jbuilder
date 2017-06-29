json.extract! channel, :id, :name, :purpose, :team_id
json.subscribers_by_id channel.subscribers.map(&:id)

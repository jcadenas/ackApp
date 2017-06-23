json.extract! team, :id, :name, :description
json.owner_id team.user_id
json.members_by_id team.members.map(&:id)

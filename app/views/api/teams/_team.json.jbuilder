json.extract! team, :name, :description
json.owner_id team.user_id
json.set! members_by_id do
  json.array! team.members, :id
end

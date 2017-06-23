json.extract! team, :name, :description
json.owner_id team.user_id
json.set! :members_by_id do
  team.members.each do |member|
    json.set! member.id, member.id
  end
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all

user1 = User.create!({username: "GobBluth", password: "GobBluth"})
user2 = User.create!({username: "MichaelBluth", password: "MichaelBluth"})
user3 = User.create!({username: "GeorgeMichaelBluth", password: "GeorgeMichaelBluth"})
user4 = User.create!({username: "BusterBluth", password: "BusterBluth"})
user5 = User.create!({username: "GeorgeBluth", password: "GeorgeBluth"})
user6 = User.create!({username: "LucilleBluth", password: "LucilleBluth"})
user7 = User.create!({username: "LindsayBluth", password: "LindsayBluth"})
user8 = User.create!({username: "MaebyFunke", password: "MaebyFunke"})
user9 = User.create!({username: "TobiasFunke", password: "TobiasFunke"})
user10 = User.create!({username: "AnnyongBluth", password: "AnnyongBluth"})

Team.destroy_all

team1 = Team.create!({name: 'bluth-company', owner: user2, description: 'Weve made huge mistakes'  })
team2 = Team.create!({name: 'banana-stand', owner: user3, description: 'Theres always money in the banana stand' })
team3 = Team.create!({name: 'gobias-industries', owner: user1, description: 'Gobias Industries is going global' })
team4 = Team.create!({name: 'funke-industries', owner: user9, description: 'Just blue ourselves and are ready to stand in' })

Membership.destroy_all


membership2 = Membership.create!({ member: user2, team: team1 })
membership3 = Membership.create!({ member: user1, team: team1 })
membership4 = Membership.create!({ member: user5, team: team1 })
membership5 = Membership.create!({ member: user6, team: team1 })

membership6 = Membership.create!({ member: user1, team: team2 })
membership7 = Membership.create!({ member: user2, team: team2 })
membership8 = Membership.create!({ member: user3, team: team2 })
membership9 = Membership.create!({ member: user5, team: team2 })
membership10 = Membership.create!({ member: user8, team: team2 })
membership11 = Membership.create!({ member: user10, team: team2 })

membership1 = Membership.create!({ member: user1, team: team3 })
membership12 = Membership.create!({ member: user9, team: team3 })

membership13 = Membership.create!({ member: user9, team: team4 })

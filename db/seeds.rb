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
team3 = Team.create!({name: 'gobias-industries', owner: user1, description: 'As in go buy us some coffee' })
team4 = Team.create!({name: 'funke-productions', owner: user9, description: 'WHO ATE MY HARD BOILED EGGS' })

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


Channel.destroy_all

channel1 = Channel.create!({team: team1 , name: 'general'})
channel2 = Channel.create!({team: team1 , name: 'gaming-ship'})
channel3 = Channel.create!({team: team1 , name: 'company-xmas-party'})
channel4 = Channel.create!({team: team1 , name: 'company-credit-card'})
channel5 = Channel.create!({team: team1 , name: 'sheep-1', purpose: 'ya lost the sheep'})
channel16 = Channel.create!({team: team1 , name: 'sheep-2', purpose: 'ya lost the sheep'})
channel17 = Channel.create!({team: team1 , name: 'sheep-3', purpose: 'ya lost the sheep'})

channel6 = Channel.create!({team: team2 , name: 'general'})
channel7 = Channel.create!({team: team2 , name: 'health-code-violations'})
channel8 = Channel.create!({team: team2 , name: 'embezzlement'})
channel9 = Channel.create!({team: team2 , name: 'cartoon-spin-offs'})

channel10 = Channel.create!({team: team3 , name: 'general'})
channel11 = Channel.create!({team: team3 , name: 'ideas'})
channel12 = Channel.create!({team: team3 , name: 'coffee-break'})

channel13 = Channel.create!({team: team4 , name: 'general'})
channel14 = Channel.create!({team: team4 , name: 'leading-male-parts'})
channel15 = Channel.create!({team: team4 , name: 'blue-man-group'})


Subscription.destroy_all

subscription1 = Subscription.create!({ subscriber: user1, channel: channel1 })
subscription2 = Subscription.create!({ subscriber: user1, channel: channel2 })
subscription3 = Subscription.create!({ subscriber: user1, channel: channel3 })
subscription4 = Subscription.create!({ subscriber: user1, channel: channel4 })
subscription5 = Subscription.create!({ subscriber: user1, channel: channel6 })
subscription6 = Subscription.create!({ subscriber: user1, channel: channel7 })
subscription7 = Subscription.create!({ subscriber: user1, channel: channel8 })
subscription8 = Subscription.create!({ subscriber: user1, channel: channel9 })
subscription9 = Subscription.create!({ subscriber: user1, channel: channel10 })
subscription10 = Subscription.create!({ subscriber: user1, channel: channel11 })
subscription11 = Subscription.create!({ subscriber: user1, channel: channel12 })

subscription12 = Subscription.create!({ subscriber: user9, channel: channel10 })
subscription13 = Subscription.create!({ subscriber: user9, channel: channel11 })
subscription14 = Subscription.create!({ subscriber: user9, channel: channel12 })

subscription15 = Subscription.create!({ subscriber: user2, channel: channel1 })
subscription16 = Subscription.create!({ subscriber: user2, channel: channel2 })
subscription17 = Subscription.create!({ subscriber: user2, channel: channel3 })
subscription18 = Subscription.create!({ subscriber: user2, channel: channel4 })
























# Bottom of file

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
user11 = User.create!({username: "TBone", password: "TBone123"})

Team.destroy_all

team1 = Team.create!({name: 'bluth-company', owner: user2, description: 'Weve made huge mistakes'  })
team2 = Team.create!({name: 'banana-stand', owner: user3, description: 'Theres always money in the banana stand' })
team3 = Team.create!({name: 'gobias-industry', owner: user1, description: 'As in, go buy us some coffee' })
team4 = Team.create!({name: 'funke-productions', owner: user9, description: 'WHO ATE MY HARD BOILED EGGS' })

Membership.destroy_all


membership1 = Membership.create!({ member: user1, team: team1 })
membership2 = Membership.create!({ member: user2, team: team1 })
membership3 = Membership.create!({ member: user3, team: team1 })
membership4 = Membership.create!({ member: user4, team: team1 })
membership5 = Membership.create!({ member: user5, team: team1 })
membership6 = Membership.create!({ member: user6, team: team1 })
membership7 = Membership.create!({ member: user7, team: team1 })
membership8 = Membership.create!({ member: user8, team: team1 })
membership9 = Membership.create!({ member: user9, team: team1 })
membership10 = Membership.create!({ member: user10, team: team1 })
membership41 = Membership.create!({ member: user11, team: team1 })

membership11 = Membership.create!({ member: user1, team: team2 })
membership12 = Membership.create!({ member: user2, team: team2 })
membership13 = Membership.create!({ member: user3, team: team2 })
membership14 = Membership.create!({ member: user4, team: team2 })
membership15 = Membership.create!({ member: user5, team: team2 })
membership16 = Membership.create!({ member: user6, team: team2 })
membership17 = Membership.create!({ member: user7, team: team2 })
membership18 = Membership.create!({ member: user8, team: team2 })
membership19 = Membership.create!({ member: user9, team: team2 })
membership20 = Membership.create!({ member: user10, team: team2 })

membership21 = Membership.create!({ member: user1, team: team3 })
membership22 = Membership.create!({ member: user2, team: team3 })
membership23 = Membership.create!({ member: user3, team: team3 })
membership24 = Membership.create!({ member: user4, team: team3 })
membership25 = Membership.create!({ member: user5, team: team3 })
membership26 = Membership.create!({ member: user6, team: team3 })
membership27 = Membership.create!({ member: user7, team: team3 })
membership28 = Membership.create!({ member: user8, team: team3 })
membership29 = Membership.create!({ member: user9, team: team3 })
membership30 = Membership.create!({ member: user10, team: team3 })

membership31 = Membership.create!({ member: user1, team: team4 })
membership32 = Membership.create!({ member: user2, team: team4 })
membership33 = Membership.create!({ member: user3, team: team4 })
membership34 = Membership.create!({ member: user4, team: team4 })
membership35 = Membership.create!({ member: user5, team: team4 })
membership36 = Membership.create!({ member: user6, team: team4 })
membership37 = Membership.create!({ member: user7, team: team4 })
membership38 = Membership.create!({ member: user8, team: team4 })
membership39 = Membership.create!({ member: user9, team: team4 })
membership40 = Membership.create!({ member: user10, team: team4 })



Channel.destroy_all

channel1 = Channel.create!({team: team1 , name: 'general', purpose: 'general chilling and milling'})
channel2 = Channel.create!({team: team1 , name: 'gaming-ship', purpose: 'we run a pretty tight ship around here'})
channel3 = Channel.create!({team: team1 , name: 'company-xmas-party' , purpose: 'no jokes. no body talks to Lindsay.'})
channel4 = Channel.create!({team: team1 , name: 'flight-records', purpose: 'where are they?'})
channel5 = Channel.create!({team: team1 , name: 'sheep', purpose: 'ya lost the sheep'})
channel16 = Channel.create!({team: team1 , name: 'copy-room', purpose: 'theres too much light in here'})
channel17 = Channel.create!({team: team1 , name: 'lost-and-found', purpose: 'ya know, finding stuff'})

channel6 = Channel.create!({team: team2 , name: 'general', purpose: 'general chilling and milling'})
channel7 = Channel.create!({team: team2 , name: 'health-code-violations', purpose: 'for emergencies call: 911'})
channel8 = Channel.create!({team: team2 , name: 'embezzlement', purpose: 'are we doubling our losses?'})
channel9 = Channel.create!({team: team2 , name: 'cartoon-spin-offs', purpose: 'GOB calls dibs on rights of all banana related cartoon characters'})

channel10 = Channel.create!({team: team3 , name: 'general', purpose: 'general chilling and milling'})
channel11 = Channel.create!({team: team3 , name: 'ideas', purpose:'um...still thinking'})
channel12 = Channel.create!({team: team3 , name: 'coffee-break', purpose: 'Gobias - as in, go buy us some coffee'})

channel13 = Channel.create!({team: team4 , name: 'general', purpose: 'general chilling and milling'})
channel14 = Channel.create!({team: team4 , name: 'hair-transplants', purpose:'who wants to take dad to the hospital?'})
channel15 = Channel.create!({team: team4 , name: 'blue-man-group', purpose:'curtain raises at 8pm sharp'})


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
subscription111 = Subscription.create!({ subscriber: user11, channel: channel4 })

subscription12 = Subscription.create!({ subscriber: user2, channel: channel1 })
subscription13 = Subscription.create!({ subscriber: user2, channel: channel2 })
subscription14 = Subscription.create!({ subscriber: user2, channel: channel3 })
subscription15 = Subscription.create!({ subscriber: user2, channel: channel4 })
subscription16 = Subscription.create!({ subscriber: user2, channel: channel6 })
subscription17 = Subscription.create!({ subscriber: user2, channel: channel7 })
subscription18 = Subscription.create!({ subscriber: user2, channel: channel8 })
subscription19 = Subscription.create!({ subscriber: user2, channel: channel9 })
subscription20 = Subscription.create!({ subscriber: user2, channel: channel10 })
subscription21 = Subscription.create!({ subscriber: user2, channel: channel11 })
subscription22 = Subscription.create!({ subscriber: user2, channel: channel12 })

subscription23 = Subscription.create!({ subscriber: user3, channel: channel1 })
subscription24 = Subscription.create!({ subscriber: user3, channel: channel2 })
subscription25 = Subscription.create!({ subscriber: user3, channel: channel3 })
subscription26 = Subscription.create!({ subscriber: user3, channel: channel4 })
subscription27 = Subscription.create!({ subscriber: user3, channel: channel6 })
subscription28 = Subscription.create!({ subscriber: user3, channel: channel7 })
subscription29 = Subscription.create!({ subscriber: user3, channel: channel8 })
subscription30 = Subscription.create!({ subscriber: user3, channel: channel9 })
subscription31 = Subscription.create!({ subscriber: user3, channel: channel10 })
subscription32 = Subscription.create!({ subscriber: user3, channel: channel11 })
subscription33 = Subscription.create!({ subscriber: user3, channel: channel12 })

subscription34 = Subscription.create!({ subscriber: user4, channel: channel1 })
subscription35 = Subscription.create!({ subscriber: user4, channel: channel2 })
subscription36 = Subscription.create!({ subscriber: user4, channel: channel3 })
subscription37 = Subscription.create!({ subscriber: user4, channel: channel4 })
subscription38 = Subscription.create!({ subscriber: user4, channel: channel6 })
subscription39 = Subscription.create!({ subscriber: user4, channel: channel7 })
subscription40 = Subscription.create!({ subscriber: user4, channel: channel8 })
subscription41 = Subscription.create!({ subscriber: user4, channel: channel9 })
subscription42 = Subscription.create!({ subscriber: user4, channel: channel10 })
subscription43 = Subscription.create!({ subscriber: user4, channel: channel11 })
subscription44 = Subscription.create!({ subscriber: user4, channel: channel12 })

subscription45 = Subscription.create!({ subscriber: user5, channel: channel1 })
subscription46 = Subscription.create!({ subscriber: user5, channel: channel2 })
subscription47 = Subscription.create!({ subscriber: user5, channel: channel3 })
subscription48 = Subscription.create!({ subscriber: user5, channel: channel4 })
subscription49 = Subscription.create!({ subscriber: user5, channel: channel6 })
subscription50 = Subscription.create!({ subscriber: user5, channel: channel7 })
subscription51 = Subscription.create!({ subscriber: user5, channel: channel8 })
subscription52 = Subscription.create!({ subscriber: user5, channel: channel9 })
subscription52 = Subscription.create!({ subscriber: user5, channel: channel10 })
subscription54 = Subscription.create!({ subscriber: user5, channel: channel11 })
subscription55 = Subscription.create!({ subscriber: user5, channel: channel12 })

subscription56 = Subscription.create!({ subscriber: user6, channel: channel1 })
subscription57 = Subscription.create!({ subscriber: user6, channel: channel2 })
subscription58 = Subscription.create!({ subscriber: user6, channel: channel3 })
subscription59 = Subscription.create!({ subscriber: user6, channel: channel4 })
subscription60 = Subscription.create!({ subscriber: user6, channel: channel6 })
subscription61 = Subscription.create!({ subscriber: user6, channel: channel7 })
subscription62 = Subscription.create!({ subscriber: user6, channel: channel8 })
subscription63 = Subscription.create!({ subscriber: user6, channel: channel9 })
subscription64 = Subscription.create!({ subscriber: user6, channel: channel10 })
subscription65 = Subscription.create!({ subscriber: user6, channel: channel11 })
subscription66 = Subscription.create!({ subscriber: user6, channel: channel12 })

subscription67 = Subscription.create!({ subscriber: user7, channel: channel1 })
subscription68 = Subscription.create!({ subscriber: user7, channel: channel2 })
subscription69 = Subscription.create!({ subscriber: user7, channel: channel3 })
subscription70 = Subscription.create!({ subscriber: user7, channel: channel4 })
subscription71 = Subscription.create!({ subscriber: user7, channel: channel6 })
subscription72 = Subscription.create!({ subscriber: user7, channel: channel7 })
subscription73 = Subscription.create!({ subscriber: user7, channel: channel8 })
subscription74 = Subscription.create!({ subscriber: user7, channel: channel9 })
subscription75 = Subscription.create!({ subscriber: user7, channel: channel10 })
subscription76 = Subscription.create!({ subscriber: user7, channel: channel11 })
subscription77 = Subscription.create!({ subscriber: user7, channel: channel12 })

subscription78 = Subscription.create!({ subscriber: user8, channel: channel1 })
subscription79 = Subscription.create!({ subscriber: user8, channel: channel2 })
subscription80 = Subscription.create!({ subscriber: user8, channel: channel3 })
subscription81 = Subscription.create!({ subscriber: user8, channel: channel4 })
subscription82 = Subscription.create!({ subscriber: user8, channel: channel6 })
subscription83 = Subscription.create!({ subscriber: user8, channel: channel7 })
subscription84 = Subscription.create!({ subscriber: user8, channel: channel8 })
subscription85 = Subscription.create!({ subscriber: user8, channel: channel9 })
subscription86 = Subscription.create!({ subscriber: user8, channel: channel10 })
subscription87 = Subscription.create!({ subscriber: user8, channel: channel11 })
subscription88 = Subscription.create!({ subscriber: user8, channel: channel12 })

subscription89 = Subscription.create!({ subscriber: user9, channel: channel1 })
subscription90 = Subscription.create!({ subscriber: user9, channel: channel2 })
subscription91 = Subscription.create!({ subscriber: user9, channel: channel3 })
subscription92 = Subscription.create!({ subscriber: user9, channel: channel4 })
subscription93 = Subscription.create!({ subscriber: user9, channel: channel6 })
subscription94 = Subscription.create!({ subscriber: user9, channel: channel7 })
subscription95 = Subscription.create!({ subscriber: user9, channel: channel8 })
subscription96 = Subscription.create!({ subscriber: user9, channel: channel9 })
subscription97 = Subscription.create!({ subscriber: user9, channel: channel10 })
subscription98 = Subscription.create!({ subscriber: user9, channel: channel11 })
subscription99 = Subscription.create!({ subscriber: user9, channel: channel12 })

subscription100 = Subscription.create!({ subscriber: user10, channel: channel1 })
subscription101 = Subscription.create!({ subscriber: user10, channel: channel2 })
subscription102 = Subscription.create!({ subscriber: user10, channel: channel3 })
subscription103 = Subscription.create!({ subscriber: user10, channel: channel4 })
subscription104 = Subscription.create!({ subscriber: user10, channel: channel6 })
subscription105 = Subscription.create!({ subscriber: user10, channel: channel7 })
subscription106 = Subscription.create!({ subscriber: user10, channel: channel8 })
subscription107 = Subscription.create!({ subscriber: user10, channel: channel9 })
subscription108 = Subscription.create!({ subscriber: user10, channel: channel10 })
subscription109 = Subscription.create!({ subscriber: user10, channel: channel11 })
subscription110 = Subscription.create!({ subscriber: user10, channel: channel12 })



Message.destroy_all

message1 = Message.create!({ author: user2, channel: channel1, body: 'I need the flight records, Dad. Im trying to find some money for the family.' })
message2 = Message.create!({ author: user5, channel: channel1, body: 'Theres always money in the banana stand.' })
message3 = Message.create!({ author: user5, channel: channel1, body: 'I am having a love affair with this ice cream sandwich.' })
message4 = Message.create!({ author: user5, channel: channel1, body: 'You want some? Take a bite.' })
message4 = Message.create!({ author: user2, channel: channel1, body: 'Please, please... The SEC has locked up our funds. These guys arent messing around.' })
message5 = Message.create!({ author: user2, channel: channel1, body: 'So, I need you to tell me. Were you taking vacations in the jet?' })
message34 = Message.create!({ author: user2, channel: channel1, body: 'Is that what youre hiding from me?' })
message6 = Message.create!({ author: user5, channel: channel1, body: 'I havent had a vacation in years. This is my vacation. Im exercising, Im sleeping well.' })
message20 = Message.create!({ author: user2, channel: channel1, body: 'Youre doing time.' })
message21 = Message.create!({ author: user5, channel: channel1, body: 'Im doing the time of my life.' })
message87 = Message.create!({ author: user11, channel: channel1, body: "What's up, pumpkin?" })
message22 = Message.create!({ author: user5, channel: channel1, body: 'Hey! T-Bone. T-Bones my roommate.' })
message23 = Message.create!({ author: user5, channel: channel1, body: 'Hes a flamer.' })
message24 = Message.create!({ author: user5, channel: channel1, body: 'Ts checking out today.' })
message87 = Message.create!({ author: user11, channel: channel1, body: "Yeah" })
message25 = Message.create!({ author: user2, channel: channel1, body: 'Well, guess every vacations got to come to an end.' })
message26 = Message.create!({ author: user5, channel: channel1, body: 'Just made a fool of yourself in front of T-Bone.' })
message27 = Message.create!({ author: user5, channel: channel1, body: 'Anyway, I want you to give him a job at the company. Sales.' })
message28 = Message.create!({ author: user2, channel: channel1, body: 'Im not going to do that.' })
message29 = Message.create!({ author: user5, channel: channel1, body: 'Why not?' })
message30 = Message.create!({ author: user2, channel: channel1, body: 'Well, because...' })
message31 = Message.create!({ author: user5, channel: channel1, body: 'Because hes a flamer? Because I told you that in confidence.' })
message32 = Message.create!({ author: user2, channel: channel1, body: 'You dont seem to understand that Im running this company now, Dad' })
message33 = Message.create!({ author: user2, channel: channel1, body: 'and I need the flight records, and Im going to get them with or without your help.' })
message35 = Message.create!({ author: user5, channel: channel1, body: 'I got something we can try, all right? Its a little risky.' })
message36 = Message.create!({ author: user2, channel: channel1, body: 'Please.' })
message37 = Message.create!({ author: user5, channel: channel1, body: 'Open up.' })
message38 = Message.create!({ author: user2, channel: channel1, body: 'What do you mean about...?' })
message39 = Message.create!({ author: user5, channel: channel1, body: '🍦🍔' })

message40 = Message.create!({ author: user3, channel: channel6, body: 'Dad, I want to work more hours at the banana stand.' })
message41 = Message.create!({ author: user2, channel: channel6, body: 'Wow. Well, thats great.' })
message42 = Message.create!({ author: user2, channel: channel6, body: 'You know, I used to be just like you when I was a kid. I used to love it there.' })
message42 = Message.create!({ author: user2, channel: channel6, body: 'Well, I’ll tell you what. I’m going to give you a promotion.' })
message43 = Message.create!({ author: user2, channel: channel6, body: 'Welcome aboard, Mr. Manager.' })
message44 = Message.create!({ author: user3, channel: channel6, body: 'Wow. Im Mr. Manager.' })
message45 = Message.create!({ author: user2, channel: channel6, body: 'Well, manager - we just say manager.' })
message46 = Message.create!({ author: user2, channel: channel6, body: 'And you can hire an employee if you need one.' })
message47 = Message.create!({ author: user3, channel: channel6, body: 'Do you think I need one?' })
message48 = Message.create!({ author: user2, channel: channel6, body: 'Dont look at me, Mr. Manager.' })
message49 = Message.create!({ author: user3, channel: channel6, body: 'Right, its up to me now. Im Mr. Manager.' })
message50 = Message.create!({ author: user2, channel: channel6, body: 'Manager. We just say, uh...' })
message51 = Message.create!({ author: user3, channel: channel6, body: 'I know, but you...' })
message52 = Message.create!({ author: user2, channel: channel6, body: 'Doesnt matter who.' })

message53 = Message.create!({ author: user6, channel: channel2, body: 'Then why dont you marry an ice cream sandwich? I’ve got to go.' })
message54 = Message.create!({ author: user2, channel: channel2, body: 'Who was that? Was that Dad?' })
message55 = Message.create!({ author: user6, channel: channel2, body: 'That was G.O.B.' })
message56 = Message.create!({ author: user2, channel: channel2, body: 'Uh-huh.' })
message57 = Message.create!({ author: user2, channel: channel2, body: 'So, Mom, Im trying to find' })
message58 = Message.create!({ author: user6, channel: channel2, body: 'I dont know where they are.' })
message59 = Message.create!({ author: user2, channel: channel2, body: '...these flight records. You know, its really more believable if you let me finish.' })
message60 = Message.create!({ author: user2, channel: channel2, body: 'Why am I the only one that seems to get how much trouble this family is in?' })
message61 = Message.create!({ author: user6, channel: channel2, body: 'WOh, I get it, Michael, I get it. But how should I know where the records are kept?' })
message62 = Message.create!({ author: user6, channel: channel2, body: 'Your fathers in charge of all that.' })
message63 = Message.create!({ author: user2, channel: channel2, body: 'No, Im in charge of all of that, and I think that you do know where they are.' })
message64 = Message.create!({ author: user6, channel: channel2, body: 'Oh, its probably all in a storage unit somewhere.' })
message65 = Message.create!({ author: user2, channel: channel2, body: 'Wheres the storage unit?' })
message66 = Message.create!({ author: user6, channel: channel2, body: "I don’t remember." })
message67 = Message.create!({ author: user2, channel: channel2, body: "Try." })
message68 = Message.create!({ author: user6, channel: channel2, body: "Something-dale. I don’t know" })
message69 = Message.create!({ author: user6, channel: channel2, body: "Brookfeather" })
message70 = Message.create!({ author: user6, channel: channel2, body: "Raintree" })
message71 = Message.create!({ author: user6, channel: channel2, body: "It’s hot. It was very hot there. I’ve never been..." })
message72 = Message.create!({ author: user6, channel: channel2, body: "Get a warrant." })
message73 = Message.create!({ author: user2, channel: channel2, body: "Don’t think I won’t." })
message74 = Message.create!({ author: user2, channel: channel2, body: "Mother, Mother, I care about this family." })
message75 = Message.create!({ author: user6, channel: channel2, body: "And I do too, my darling. That’s why I’m worried about G.O.B..." })
message76 = Message.create!({ author: user6, channel: channel2, body: "I was on the phone with him this morning." })
message77 = Message.create!({ author: user2, channel: channel2, body: "You mean just now, right? When I came in?" })
message78 = Message.create!({ author: user6, channel: channel2, body: "Yes, just now, when you came in." })
message79 = Message.create!({ author: user6, channel: channel2, body: "And he’s upset, he’s very upset." })
message80 = Message.create!({ author: user6, channel: channel2, body: "You haven’t included him in the business at all. He’s your older brother." })
message81 = Message.create!({ author: user6, channel: channel2, body: "You could find a little job for him." })
message82 = Message.create!({ author: user6, channel: channel2, body: "Make him feel special." })
message83 = Message.create!({ author: user2, channel: channel2, body: "But he’s not special, Mother." })
message84 = Message.create!({ author: user6, channel: channel2, body: "No. But he loves you. We all love you." })
message85 = Message.create!({ author: user2, channel: channel2, body: "Where’s the storage unit?" })
message86 = Message.create!({ author: user6, channel: channel2, body: "It’s with your warrant." })

message88 = Message.create!({ author: user2, channel: channel8, body: "You’re not going to keep running this company from in here, okay?" })
message89 = Message.create!({ author: user2, channel: channel8, body: "That’s why you wanted me to give T-Bone a job, to pay him back for burning down the storage unit?" })
message90 = Message.create!({ author: user5, channel: channel8, body: "Michael, that’s ridiculous." })
message91 = Message.create!({ author: user2, channel: channel8, body: "Yeah, well, I’m not hiring him. No, we don’t have the money, Pop." })
message92 = Message.create!({ author: user5, channel: channel8, body: "There’s always money in the banana stand." })
message93 = Message.create!({ author: user2, channel: channel8, body: "The banana stand... you know, that’s exactly what this feels like." })
message94 = Message.create!({ author: user2, channel: channel8, body: "Like I’m still stuck in that hot booth all summer with you pulling the strings." })
message95 = Message.create!({ author: user5, channel: channel8, body: "What was I going to do? Put a kid in charge of a frozen banana stand?" })
message96 = Message.create!({ author: user2, channel: channel8, body: "Sure, that’s what I did. I just made my son the manager." })
message97 = Message.create!({ author: user5, channel: channel8, body: "George Michael is running the frozen banana stand now?" })
message98 = Message.create!({ author: user2, channel: channel8, body: "Yeah, that’s right, yeah. You sit with that, you think about that for a while." })
message99 = Message.create!({ author: user8, channel: channel8, body: "Well, now that we’ve got an employee, we can go have dinner." })
message100 = Message.create!({ author: user8, channel: channel8, body: "We throw away a banana for every buck we take so no one finds out." })
message101 = Message.create!({ author: user11, channel: channel8, body: "Wait a minute, I think you should do that math again." })
message102 = Message.create!({ author: user3, channel: channel8, body: "Why? Is it wrong?" })
message103 = Message.create!({ author: user8, channel: channel8, body: "It’s fine. He’s an arsonist, not an embezzler." })


message15 = Message.create!({ author: user8, channel: channel7, body: 'Any paper towels anywhere?' })
message16 = Message.create!({ author: user3, channel: channel7, body: 'I couldnt tell you how many health codes youre breaking right now' })

message19 = Message.create!({ author: user1, channel: channel3, body: 'Everyone dance. Now.' })























# Bottom of file

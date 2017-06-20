# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all

user1 = User.create!({username: "HomerSimpson", password: "HomerSimpson"})
user2 = User.create!({username: "MargeSimpson", password: "MargeSimpson"})
user3 = User.create!({username: "BartSimpson", password: "BartSimpson"})
user4 = User.create!({username: "LisaSimpson", password: "LisaSimpson"})
user5 = User.create!({username: "MaggieSimpson", password: "MaggieSimpson"})

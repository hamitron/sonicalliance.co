require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do 
 Transmission.create(name: Faker::Hacker.ingverb, message: Faker::Lorem.sentence(3, true), uid: Faker::Code.isbn, codename: Faker::Internet.password(10, 20))
end
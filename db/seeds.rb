require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

puts "🤪 Making users..."                        
demo1 = User.create(id: Faker::IDNumber.valid, username: "yixin", fullname: "Yixin", email: "who@gmail.com", password: "12345")
demo2 = User.create(id: Faker::IDNumber.valid, username: "sam", fullname: "Brad Pitt", email: "sam19931225@gmail.com", password: "12345")
demo3 = User.create(id: Faker::IDNumber.valid, username: "demo", fullname: "Whoever", email: "demo@gmail.com", password: "12345")


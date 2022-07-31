require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

puts "🤪 Making users..."                        
demo1 = User.create(id: Faker::IDNumber.valid, username: "yixin", fullname: "Yixin", email: "who@gmail.com", password: "12345")
demo2 = User.create(id: Faker::IDNumber.valid, username: "sam", fullname: "Brad Pitt", email: "sam19931225@gmail.com", password: "12345")
demo3 = User.create(id: Faker::IDNumber.valid, username: "demo", fullname: "Whoever", email: "demo@gmail.com", password: "12345")

puts "🤪 Making words..." 
response = RestClient.get('https://api.urbandictionary.com/v0/random', headers:{
     'Content-Type': 'application/json'
 })
json = JSON.parse(response)

if !json.nil?
   json["list"].map  do |word|
        Word.create(
            # id: word.keys(),
             name: word["word"], 
             definition: word["definition"], 
             example: word["example"], 
             author: word["author"], 
            written_on: word["written_on"]
        )
        
    end
    else
        puts "error"
end

puts "🤪 Making userwords..."
us1 = Userword.create( user_id: User.first.id, word_id:Word.first.id)
us2 = Userword.create( user_id:User.first.id, word_id:Word.second.id)
us3 = Userword.create( user_id:User.first.id, word_id:Word.third.id)

puts "🤪 Making tags..."
Tag.create(id: Faker::IDNumber.valid,name:Faker::Emotion.adjective)
Tag.create(id: Faker::IDNumber.valid,name:Faker::Emotion.adjective)
Tag.create(id: Faker::IDNumber.valid,name:Faker::Emotion.adjective)
Tag.create(id: Faker::IDNumber.valid,name:Faker::Emotion.adjective)

puts "🤪 Making WordTag..."
WordTag.create(tag_id:Tag.first.id, userword_id: Userword.first.id)
WordTag.create(tag_id:Tag.second.id, userword_id: Userword.first.id)
WordTag.create(tag_id:Tag.third.id, userword_id: Userword.first.id)
WordTag.create(tag_id:Tag.fourth.id, userword_id: Userword.first.id)

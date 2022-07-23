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
Userword.create(id: 1, user_id:User.first.id, word_id:Word.first.id, name:Word.first[:name], definition: Word.first[:definition], example: Word.first[:example], author: Word.first[:author], written_on: Word.first[:written_on])
Userword.create(id: 2, user_id:User.first.id, word_id:Word.second.id, name:Word.second[:name], definition: Word.second[:definition], example: Word.second[:example], author: Word.second[:author], written_on: Word.second[:written_on])
Userword.create(id: 3, user_id:User.first.id, word_id:Word.third.id, name:Word.third[:name], definition: Word.third[:definition], example: Word.third[:example], author: Word.third[:author], written_on: Word.third[:written_on])



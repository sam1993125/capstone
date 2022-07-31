class WordTagUserwordSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :word_id 
  
  belongs_to :word
end

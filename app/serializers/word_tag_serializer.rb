class WordTagSerializer < ActiveModel::Serializer
   attributes :id, :tag_id, :userword_id 

   belongs_to :userword, serializer: WordTagUserwordSerializer
   belongs_to :tag, serializer: WordTagTagSerializer
end

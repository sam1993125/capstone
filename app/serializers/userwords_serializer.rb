class UserwordsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :word_id, :name, :definition, :example, :written_by, :written_on
end

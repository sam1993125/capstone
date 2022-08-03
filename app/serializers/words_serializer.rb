class WordsSerializer < ActiveModel::Serializer
  attributes :id, :name, :definition, :example, :author, :written_on

  has_many :userwords
end

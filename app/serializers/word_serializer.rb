class WordSerializer < ActiveModel::Serializer
  attributes :id, :name, :definition, :example, :author, :written_on

  has_many :userwords
  # has_many :word_tags, through: :userwords
  # has_many :tags, through: :word_tags
end

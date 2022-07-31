class WordsSerializer < ActiveModel::Serializer
  attributes :id, :name, :definition, :example, :author, :written_on

end

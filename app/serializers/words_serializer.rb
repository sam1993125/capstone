class WordsSerializer < ActiveModel::Serializer
  attributes :id, :name, :definition, :example, :written_by, :written_on
end

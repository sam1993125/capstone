class WordsSerializer < ActiveModel::Serializer
  attributes :id, :name, :definition, :example, :author :written_on

  #   def definition_ref
  #   self.definition.replace(/\[|\]|"/g, "")
  # end

end

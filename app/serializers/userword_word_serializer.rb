class UserwordWordSerializer < ActiveModel::Serializer
  attributes :id, :name, :definition, :example, :written_on, :author
end

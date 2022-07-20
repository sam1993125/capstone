class UsersSerializer < ActiveModel::Serializer
  attributes :id, :username, :fullname, :email, :password_digest
end

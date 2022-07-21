class User < ApplicationRecord
has_secure_password

has_many :userwords
has_many :words, through: :userwords

validates :username, presence: true, uniqueness: true
validates :email, presence: true, uniqueness: true

end

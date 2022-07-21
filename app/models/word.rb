class Word < ApplicationRecord
    
has_many :userwords
has_many :users, through: :userwords
end

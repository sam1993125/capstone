class Tag < ApplicationRecord
    has_many :word_tags
     has_many :userwords, through: :word_tags
end

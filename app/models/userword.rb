class Userword < ApplicationRecord
    belongs_to :user
    belongs_to :word, dependent: :destroy

    has_many :word_tags
    has_many :tags, through: :word_tags
end

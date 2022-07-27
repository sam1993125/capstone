class Userword < ApplicationRecord
    belongs_to :user
    belongs_to :word, dependent: :destroy

end

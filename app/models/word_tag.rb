class WordTag < ApplicationRecord
    belongs_to :tag, dependent: :destroy
    belongs_to :userword
end

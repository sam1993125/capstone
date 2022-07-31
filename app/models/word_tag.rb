class WordTag < ApplicationRecord
    belongs_to :tag
    belongs_to :userword
end

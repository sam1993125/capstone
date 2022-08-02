class Word < ApplicationRecord
    
has_many :userwords
has_many :users, through: :userwords

validates :name, presence: true
validates :definition, presence: true
validates :example, presence: true
validates :author, presence: true
validates :written_on, presence: true

end

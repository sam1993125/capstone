class Userword < ApplicationRecord
    belongs_to :user
    belongs_to :word

    has_many :word_tags, dependent: :destroy
    has_many :tags, through: :word_tags

    def self.tagged_with(name)
        Tag.find_by!(name: name).userwords
    end

    def self.tag_counts
        Tag.count
    end

    def tag_list
        tags.map(&:name).join(', ')
    end


end

class CreateWordTags < ActiveRecord::Migration[6.1]
  def change
    create_table :word_tags do |t|
      t.integer :userword_id
      t.integer :tag_id

      t.timestamps
    end
  end
end

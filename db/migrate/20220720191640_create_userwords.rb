class CreateUserwords < ActiveRecord::Migration[6.1]
  def change
    create_table :userwords do |t|
      t.integer :user_id
      t.integer :word_id
      t.string :name
      t.text :definition
      t.text :example
      t.string :author
      t.date :written_on

      t.timestamps
    end
  end
end

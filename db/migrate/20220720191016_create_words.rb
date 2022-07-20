class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :word
      t.text :definition
      t.text :example
      t.string :written_by
      t.date :written_on

      t.timestamps
    end
  end
end

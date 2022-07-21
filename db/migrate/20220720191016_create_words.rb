class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :name
      t.text :definition
      t.text :example
      t.string :author
      t.date :written_on

      t.timestamps
    end
  end
end

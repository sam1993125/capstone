class RemoveNameFromUserword < ActiveRecord::Migration[6.1]
  def change
    remove_column :userwords, :name, :string
  end
end

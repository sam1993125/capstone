class RemoveExampleFromUserword < ActiveRecord::Migration[6.1]
  def change
    remove_column :userwords, :example, :string
  end
end

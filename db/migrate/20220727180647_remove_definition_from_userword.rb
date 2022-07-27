class RemoveDefinitionFromUserword < ActiveRecord::Migration[6.1]
  def change
    remove_column :userwords, :definition, :string
  end
end

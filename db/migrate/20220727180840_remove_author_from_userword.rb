class RemoveAuthorFromUserword < ActiveRecord::Migration[6.1]
  def change
    remove_column :userwords, :author, :string
  end
end

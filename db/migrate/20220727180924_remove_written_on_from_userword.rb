class RemoveWrittenOnFromUserword < ActiveRecord::Migration[6.1]
  def change
    remove_column :userwords, :written_on, :date
  end
end

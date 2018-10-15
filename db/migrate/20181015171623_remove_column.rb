class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
  remove_column :users, :imagestring, :string
  add_column :users, :image, :string
  end
end

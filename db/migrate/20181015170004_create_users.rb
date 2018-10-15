class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :bio
      t.string :gender
      t.string :imagestring
      t.string :level
      t.string :password_digest

      t.timestamps
    end
  end
end

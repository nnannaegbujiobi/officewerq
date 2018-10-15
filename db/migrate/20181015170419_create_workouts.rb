class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :time
      t.string :image
      t.text :description
      t.string :level

      t.timestamps
    end
  end
end

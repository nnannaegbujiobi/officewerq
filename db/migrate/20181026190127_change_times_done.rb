class ChangeTimesDone < ActiveRecord::Migration[5.2]
  def change
    change_column_default :user_workouts, :times_done, 1
  end
end

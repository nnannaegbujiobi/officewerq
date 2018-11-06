class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  has_many :user_workouts
  has_many :workouts,through: :user_workouts
  has_one_attached :avatar
  def calculated_progress
    completed = 0
    user_workouts.each do |workout|
      completed += workout.times_done
    end
    if completed > 30
      completed = 30

    end
    progress = completed * 100 / 30

  end 
    #calculate number of workouts based on user_workout associations
  #   end
  # end
end

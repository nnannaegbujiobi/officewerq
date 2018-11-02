class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  has_many :user_workouts
  has_many :workouts,through: :user_workouts
  has_one_attached :avatar
  def progress
    #calculate number of workouts based on user_workout associations
  end
end

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
  def badge_name
    progress = calculated_progress
    if progress >= 0 && progress < 10
      "Office Potatoe"
    elsif progress >= 10 && progress < 20
      "Coffee Boi"
    elsif progress >= 20 && progress < 30
      ""
    elsif progress >= 30 && progress < 40
      ""
    elsif progress >= 40 && progress < 50
      ""
    elsif progress >= 50 && progress < 60
      ""
    elsif progress >= 60 && progress < 70
      ""
    elsif progress >= 70 && progress < 80
      ""
    elsif progress >= 80 && progress < 90
      ""
    elsif progress >= 90 && progress < 100
      ""
    elsif progress = 100
      "Hero For Hire"
      
        
        
        
        
        
        
        
        
        

      


    end
  end
end

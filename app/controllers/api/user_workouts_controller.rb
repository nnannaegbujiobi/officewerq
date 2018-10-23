class Api::UserWorkoutsController < ApplicationController
  def show 
    @user_workout = UserWorkout.find_by(id:params[:id])
    render "show.json.jbuilder"
  end
  def create
    @user_workout = UserWorkout.create(user_id: params[:user_id],
      workout_id: params[:workout_id])

    if @user_workout.save
      render "show.json.jbuilder"
    else
      render json: {errors: @user_workout.errors.full_messages}, status: :unprocessable_entity
    
  end
  end
end
class Api::UserWorkoutsController < ApplicationController
def show 
@user_workout = UserWorkout.find_by(id:params[:id])
render "show.json.jbuilder"
end

end

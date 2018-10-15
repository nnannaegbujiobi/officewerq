class Api::WorkoutsController < ApplicationController
def index

  @workouts = Workout.all
  render "index.json.jbuilder"

end



def show
@wokout = Workout.find_by(id:params[:id])
render "show.json.jbuilder"

end
end

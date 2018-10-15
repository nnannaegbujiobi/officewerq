Rails.application.routes.draw do
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"
namespace :api do 
#users restful routes 


post "users" => "users#create"

get "/users/:id" => "users#show"



patch "/users/:id/" => "users#update"

#workout restful routes

get "workouts/:id" => "workouts#show"

#user_workout

get "/user_workout/:id" => "user_workout#show"


end

end

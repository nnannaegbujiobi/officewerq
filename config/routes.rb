Rails.application.routes.draw do
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"
  namespace :api do 
  #users restful routes 


    post "users" => "users#create"

    get "/users/:id" => "users#show"



    patch "/users/:id/" => "users#update"

  #workout restful routes
    get "workouts" => "workouts#index"

    get "workouts/:id" => "workouts#show"

  #user_workout

    get "/user_workouts/:id" => "user_workouts#show"

  #sessions#create

    post "/sessions" => "sessions#create"



  end

end

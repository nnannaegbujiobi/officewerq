Rails.application.routes.draw do
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"
  namespace :api do 
  #users restful routes 
    get "users" => "users#index"

    post "/users" => "users#create"

    get "/users/me" => "users#profile"

    get "/users/:id" => "users#show"

    delete "/users/:id" => "users#destroy"


    patch "/users/me/" => "users#update"

  #workout restful routes
    get "/workouts" => "workouts#index"

    get "workouts/daily" => "workouts#show"


  #user_workout

    get "/user_workouts/:id" => "user_workouts#show"

    post "/user_workouts" => "user_workouts#create"

  #sessions#create

    post "/sessions" => "sessions#create"

  end

end

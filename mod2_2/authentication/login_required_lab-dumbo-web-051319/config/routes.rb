Rails.application.routes.draw do

  root 'application#hello'
  get '/login', to: "sessions#login"
  post '/login', to: "sessions#create"
  get '/home', to: "sessions#home"
  get '/logout', to: 'sessions#logout'
  # get '/index', to: "sessions#index"
  get '/secret', to: "secrets#show"

end

# get 'secrets/new'

# root 'application#hello'
# get '/login' => 'sessions#new'
# post '/login' => 'sessions#create'
# post '/logout' => 'sessions#destroy'
# get '/secret' => 'secrets#show'
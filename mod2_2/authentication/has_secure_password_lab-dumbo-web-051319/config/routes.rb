Rails.application.routes.draw do
  
  get '/welcome', to: 'users#welcome'
  get '/signup', to: "users#new"
  post '/users', to: 'users#create'
  get 
  
  # resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

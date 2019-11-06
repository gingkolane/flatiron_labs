Rails.application.routes.draw do
  # get '/restaurants', to: 'restaurants#index'
  # get '/pizzas', to: 'pizzas#index'

  get '/search_result', to: 'restaurants#search'

  resources :restaurants
  resources :pizzas
  
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to:'sessions#login'
  
  get '/welcome', to: 'sessions#welcome'

  get '/secrets', to:'secrets#require_login'


end

Rails.application.routes.draw do
  get 'violins/index'

  get 'violins/show'

  resources :appearances
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :guests, only: [:index, :show]
  resources :episodes
end

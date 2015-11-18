Rails.application.routes.draw do
  
  root 'static#index'
  get   '/login' => 'sessions#new', :as => :login
  post '/login' => 'sessions#create', :as => :sessions

  resources :transmissions
  
end

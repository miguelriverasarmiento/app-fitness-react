Rails.application.routes.draw do
  root 'home#index'
  
  scope '/api/v1/' do

    resources :class_avs
    resources :bookings
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]
    
  end

    post '/create', to: 'class_avs#create'
    post '/create', to: 'bookings#create'

    delete '/logout', to: "sessions#logout"
    get '/logged_in', to: "sessions#logged_in"
  
end

Rails.application.routes.draw do
  root 'home#index'
  
  scope '/api/v1/' do 

    resources :class_avs
    resources :bookings
    
  end

  post '/create', to: 'class_avs#create'
  post '/create', to: 'bookings#create'
  
end

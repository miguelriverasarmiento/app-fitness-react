Rails.application.routes.draw do
  root 'home#index'
  
  scope '/api/v1/' do 

    resources :class_avs
    resources :bookings
    
  end
end

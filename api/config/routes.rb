Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
    
  namespace :api do
     get "pokemon/:id", :to => "pokemon#show" 
  end
      
  

  devise_for :users
end

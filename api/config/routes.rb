Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: '/auth'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
    
  namespace :api do
     match "pokemon/:id", :to => "pokemon#show", :via => [:options, :get]
     match "pokemon/random/ou", :to => "pokemon#random_ou", :via => [:options, :get]
     match "pokemon/random/from/:tier/with/:move", :to => "pokemon#random_move", :via => [:options, :get]
  end
      
  

  get "/auth/:provider/callback", to: "session#create"
end

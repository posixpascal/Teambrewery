Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
    namespace :api do
        namespace :team do
            namespace :pokemon do
                get 'moveset/index'
                get 'moveset/show'
                get 'moveset/create'
                get 'moveset/update'
                get 'moveset/delete'
              
                # api/team/pokemon  
                get "show"
                get "index"
                get "create"
                get "delete"
                get "new"    
            end
            
            # api/team
            get "show"
            get "index"
            get "create"
            get "delete"
            get "new"
        end
         
        namespace :item do
             get "index"
             get "show"
             get "find"
        end
         
        namespace :move do
            get "show"
            get "find"
            get "index" 
        end
         
        namespace :type do
            get "show"
            get "index"
            get "find" 
        end
         
        namespace :pokemon do
            get "show"
            get "find"
            get "index" 
        end
    end

  devise_for :users
end

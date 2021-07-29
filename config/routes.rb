Rails.application.routes.draw do
  
  resources :clothings, only: [:create]
  post "fetch_user_clothings", to: "clothings#fetch_user_clothings"
  # resources :swap_clothings
  # resources :swap_users
  # resources :swaps
  resources :users, only: [:create]
  post '/login', to: 'users#login'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

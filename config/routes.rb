Rails.application.routes.draw do
  
  resources :clothings, only: [:create]
  post "fetch_user_clothings", to: "clothings#fetch_user_clothings"
  patch "remove_user_ids", to: "clothings#remove_user_ids"
  resources :swap_clothings, only: [:create]
  resources :swap_users, only: [:create]
  resources :swaps, only: [:index, :show]
  post "fetch_current_user_swaps", to: "swaps#fetch_current_user_swaps"
  resources :users, only: [:create, :index]
  post '/login', to: 'users#login'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  
  resources :clothings, only: [:create, :update]
  post "fetch_user_clothings", to: "clothings#fetch_user_clothings"
  patch "remove_user_ids", to: "clothings#remove_user_ids"
  resources :swap_clothings, only: [:create, :destroy]
  post "fetch_current_swap_clothings", to: "swap_clothings#fetch_current_swap_clothings"
  resources :swap_users, only: [:create, :update]
  post "set_current_swap_user", to: "swap_users#set_current_swap_user"
  resources :swaps, only: [:index, :show, :create]
  post "fetch_current_user_swaps", to: "swaps#fetch_current_user_swaps"
  resources :users, only: [:create, :index]
  post '/login', to: 'users#login'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  root 'dashboard#index'
  get 'dashboard', to: 'dashboard#index'
  resources :accounts
end
Rails.application.routes.draw do
  root    'dashboard#index'
  get     '/accounts',    to: 'accounts#new'
  get     '/signup',      to: 'accounts#new'
  get     '/login',       to: 'sessions#new'  
  post    '/login',       to: 'sessions#create'
  delete  '/logout',      to: 'sessions#destroy'  
  get     'dashboard',    to: 'dashboard#index'
  resources :accounts
end
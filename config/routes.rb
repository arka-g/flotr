Rails.application.routes.draw do
  devise_for :users
  resources :images
  get 'tags/:tag', to: 'images#index', as: "tag"

  root 'images#index'
end

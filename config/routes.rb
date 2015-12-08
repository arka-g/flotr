Rails.application.routes.draw do
  devise_for :users
  resources :images
  get 'tags/:tag', to: 'images#index', as: "tag"
  get 'browse', to: 'images#browse_tags'

  root 'images#index'
end

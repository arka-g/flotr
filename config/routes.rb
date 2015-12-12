Rails.application.routes.draw do
  devise_for :users
  resources :images do
    member do
      get 'like', to: 'images#like'
    end
    resources :comments
  end
  get 'tags/:tag', to: 'images#tags', as: "tag"
  get 'browse', to: 'images#browse_tags'
  get 'profile', to: 'images#profile'
  root 'images#gotoImages'
end

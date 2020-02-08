Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'homepage#index'
  devise_scope :user do
    authenticated :user do
      root 'homepage#index', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
    get 'sign_in', to: 'users/sessions#new'
    get 'sign_up', to: 'users/registrations#new'
    get 'sign_out', to: 'users/sessions#destroy'
    get 'forgot_password', to: 'users/passwords#new'
    get 'reset_password', to: 'users/passwords#edit'
  end
end

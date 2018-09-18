Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  scope module: :front do
  	root "static_pages#home"
  end

  namespace :admin do
		get '', to: 'dashboard#index', as: '/'
		resources :services
		resources :settings
		resources :members
		resources :posts
		resources :jobs
		resources :requests
		resources :post_categories
		resources :service_categories
	end
  

end

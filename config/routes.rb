Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  scope module: :front do
  	root "static_pages#home"

  	# Тут крутой неймспейсинг запросов
    resources :consult_requests, only: [:new, :create], controller: 'requests', type: 'ConsultRequest'
    resources :book_requests, only: [:new, :create], controller: 'requests', type: 'BookRequest'
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
		resources :galleries
		resources :reviews
	end
  

end

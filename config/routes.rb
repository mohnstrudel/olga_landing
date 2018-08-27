Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  scope module: :front do
  	root "static_pages#root"
  end

  namespace :admin do
		get '', to: 'dashboard#index', as: '/'
	end
  

end

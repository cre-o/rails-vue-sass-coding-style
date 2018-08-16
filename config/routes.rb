Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'site#index'

  namespace :site do
    get :portfolio
    get :project
    get :about
    get :contacts
    get :blog
    get :blog_more
    get :services
  end
end

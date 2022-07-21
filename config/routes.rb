Rails.application.routes.draw do
  #login/signup
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #Words
  get "/words", to: "words#index"

  #Userwords
  get "/userwords", to: "userwords#index"
  # get "/userwords/:id", to: "userwords#show"

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

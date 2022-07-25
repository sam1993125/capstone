Rails.application.routes.draw do
  #login/signup
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #Words
  get "/words", to: "words#index"
  get "/words/:id", to: "words#show"
  post "/add_word", to: "words#create"

  #Userwords
  get "/userwords", to: "userwords#index"
  delete "/userwords/:id", to: "userwords#destroy"

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

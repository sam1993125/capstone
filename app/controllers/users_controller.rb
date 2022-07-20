class UsersController < ApplicationController
skip_before_action :authenticate_user
  
  # get '/me'
  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: { error: 'No active session' }, status: :unauthorized
    end
  end

  # post '/signup'
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { error: user.errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :password, :fullname, :email)
  end
end

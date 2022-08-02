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

  def words_create
    word = Word.create!(word_param)
    userword = Userword.create!(user_id: current_user.id, word_id: word.id)
  end

  def user_words_index
      render json: current_user.words.order("created_at DESC")
  end

    def user_userwords_index
      render json: current_user.userwords.order("created_at DESC")
  end

  private

  def user_params
    params.permit(:username, :password, :fullname, :email)
  end

  def word_param
    params.permit(:name, :definition, :example, :written_on, :author)
  end

end

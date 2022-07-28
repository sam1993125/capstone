class UserwordsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index]

    def index 
        render json: Userword.all.order("created_at DESC"),  include: ['word']
    end

    def create
        userword = @current_user.words.create!(userword_param)
        render json: userword, status: :accepted
    end

    def destroy
        userword = Userword.where(user_id: params[:user_id])
        delete_userword = userword.find_by(word_id: params[:word_id])
        delete_userword.destroy
        head :no_content
    end

    private
    def userword_param
        params.require(:user_id).permit(:name, :definition, :example, :written_on, :author)
    end

end

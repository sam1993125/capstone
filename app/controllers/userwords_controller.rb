class UserwordsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index]

    def index 
        render json: Userword.all,  include: ['word']
    end

    def destroy
        userword = Userword.find(params[:id])
        userword.destroy
        head :no_content
    end

  
end

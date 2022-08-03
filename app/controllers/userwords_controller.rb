class UserwordsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index]

    def index 
        render json: Userword.all.order("created_at DESC"),  include: ['word', 'tags']
    end
    
    def userword_tags_index
        render json: WordTag.where(userword_id: params[:userword_id])
    end

    def tags_create
        userword = Userword.find(params[:userword_id])
        tag = Tag.create!(tag_params)
        userword_tag = WordTag.create!(userword_id: userword.id, tag_id: tag.id)
        render json: userword_tag
    end

    def destroy
        userword = Userword.find_by(user_id: params[:user_id], word_id: params[:word_id])
        userword.delete
        head :no_content
    end


    private
    def userword_param
        params.require(:user_id).permit(:name, :definition, :example, :written_on, :author)
    end

    def tag_params
        params.permit(:name)
    end

end

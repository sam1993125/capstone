class WordsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index]

    def index
        render json: Word.all
    end

    def show
        render json: Word.find(params[:id])
    end

    def create
        word = @current_user.words.create!(word_param)
        render json: word, status: :accepted
    end

    private
    def word_param
        params.permit(:name, :definition, :example, :written_on, :author)
    end


end

class WordsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :show]

    def index
        render json: Word.all
    end
    

end

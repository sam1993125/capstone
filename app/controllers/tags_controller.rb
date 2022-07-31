class TagsController < ApplicationController
    
     def index
        render json: Tag.all, include: ['word_tags']
    end
end

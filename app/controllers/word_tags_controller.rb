class WordTagsController < ApplicationController
   skip_before_action :authenticate_user, only: [:index]
     def index 
        render json: WordTag.all.order("created_at DESC"),  include: ['userword','userword.word', 'tag']
     end

     
     def destroy
         WordTag.find(params[:id]).delete
         head :no_content
    end

   end
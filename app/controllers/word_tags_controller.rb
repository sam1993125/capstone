class WordTagsController < ApplicationController
     def index 
        render json: WordTag.all.order("created_at DESC"),  include: ['userword','userword.word', 'tag']
     end
   end
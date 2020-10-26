class QuestionsController < ApplicationController
    def index 
        questions = Question.all
        render json: QuestionSeriaizer.new(questions).data
    end
end

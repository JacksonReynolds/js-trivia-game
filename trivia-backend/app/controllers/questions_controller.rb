class QuestionsController < ApplicationController
    def index 
        questions = Question.all
        render json: QuestionSerializer.new(questions)
    end
end

class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :difficulty
  attributes :answers do |question| 
    AnswerSerializer.new(question.answers).as_json["data"]
  end
end

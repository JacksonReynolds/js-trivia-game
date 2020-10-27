class AnswerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :correct
end

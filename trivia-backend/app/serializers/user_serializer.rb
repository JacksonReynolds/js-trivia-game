class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :hiscore
end

class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :score
end

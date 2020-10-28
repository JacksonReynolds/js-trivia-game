class User < ApplicationRecord
    scope :hiscores, -> {order(score: :desc).limit(10)}
end

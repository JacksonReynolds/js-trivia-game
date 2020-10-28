class User < ApplicationRecord
    scope :hiscores, -> {order(hiscore: :desc).limit(10)}
end

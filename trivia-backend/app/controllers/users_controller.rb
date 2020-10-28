class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            render json: UserSerializer.new(user)
        end
    end

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def hiscores
        users = User.hiscores
        render json: UserSerializer.new(users)
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end
end

class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            render json: UserSerializer.new(user)
        end
    end

    def hiscores
        top_users = User.hiscores
        render json: UserSerializer.new(top_users)
    end

    def update
        user = User.find_by(id: params[:id])
        if user.update(user_params)
            render json: UserSerializer.new(user)
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :score)
    end
end

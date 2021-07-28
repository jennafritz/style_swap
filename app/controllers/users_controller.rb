class UsersController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :not_found
skip_before_action :authorized, only: [:create, :login]

    def create
        byebug
        @user = User.create!(user_params)
        @token = encode_token(user_id: @user.id)
        render json: { user: UserSerializer.new(@user), token: @token }, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { error: invalid.record.errors.full_messages }, status: :not_acceptable
    end

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def login
        @user = User.find_by(username: user_login_params[:username])
        if @user && @user.authenticate(user_login_params[:password])
            token = encode_token(user_id: @user.id)
            render json: { user: UserSerializer.new(@user), token: token }, status: :accepted
        else
            render json: { error: 'Invalid username or password' }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :bio, :image_url, :spirit_color, :admin)
    end

    def user_login_params
        params.permit(:username, :password)
    end

    def not_found
        render json: {error: 'User not found'}, status: :not_found
    end

end

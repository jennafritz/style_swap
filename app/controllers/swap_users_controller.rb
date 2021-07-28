class SwapUsersController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :not_valid
rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
        new_swap_user = SwapUser.create!(swap_user_params)
        render json: {message: "SwapUser successfully created"}, status: :created
    end

    def update
        swap_user = SwapUser.find(params[:id])
        swap_user.update!(swap_user_params)
        render json: swap_user, status: :accepted
    end

    def current_swap_users
        current_swap_users = SwapUser.where(user_id: params[:currentUserId])
        render json: current_swap_users, status: :ok
    end

    private

    def swap_user_params
        params.permit(:user_id, :swap_id, :credits)
    end

    def not_found
        render json: { error: "SwapUser not found" }, status: :not_found
    end

    def not_valid(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :not_acceptable
    end


end

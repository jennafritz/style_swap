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

    # used in previous version to get all swapUser instances for current user
    def current_swap_users
        current_swap_users = SwapUser.where(user_id: params[:currentUserId])
        render json: current_swap_users, status: :ok
    end

    def set_current_swap_user
        current_swap_user = SwapUser.find_by(user_id: params[:user_id], swap_id: params[:swap_id])
        render json: current_swap_user, status: :ok
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

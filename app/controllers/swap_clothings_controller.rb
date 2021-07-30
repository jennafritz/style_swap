class SwapClothingsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
        swap_id = params[:swap_id]
        params[:array].each do |clothing|
            new_swap_clothing = SwapClothing.create!(clothing_id: clothing[:id], prev_owner_id: clothing[:user_id], swap_id: swap_id)
        end
            render json: {message: "SwapClothings successfully created"}, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { error: invalid.record.errors.full_messages }, status: :not_acceptable
    end

    def fetch_current_swap_clothings
        current_swap_clothings = SwapClothing.where(swap_id: params[:swap_id])
        render json: current_swap_clothings, status: :ok
    end

    def destroy
        swap_clothing = SwapClothing.find(params[:id])
        swap_clothing.destroy!
        render json: {deleted_id: params[:id], message: "SwapClothing Destroyed"}, status: :accepted
    end

    private

    def not_found
        render json: {error: "SwapClothing not found"}, status: :not_found
    end

    def swap_clothing_params
        params.require(:array).permit(:id, :user_id)
        params.permit(:swap_id)
    end

end

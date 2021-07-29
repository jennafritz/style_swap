class SwapsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        swaps = Swap.all.order(start: :asc)
        render json: swaps, status: :ok
    end

    def show
        current_swap = Swap.find(params[:id])
        render json: current_swap, serializer: DeepSwapSerializer
    end

    def create
        startTime = Time.parse(params[:start])
        endTime = Time.parse(params[:end])
        new_swap = Swap.create!(name: params[:name], start: startTime, end: endTime)
        render json: new_swap, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def fetch_current_user_swaps
        current_user = User.find(params[:user_id])
        current_user_swaps = current_user.swaps.order(start: :asc)
        byebug
        render json: current_user_swaps, status: :accepted
    end

    private

    def not_found
        render json: {error: "Not Found"}, status: :not_found
    end

end

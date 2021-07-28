class SwapsController < ApplicationController

    def index
        swaps = Swap.all
        render json: swaps, status: :ok
    end

    def show
        swap_to_render = Swap.find(params[:id])
        render json: swap_to_render, serializer: DeepSwapSerializer
    end

    def create
        startTime = Time.parse(params[:start])
        endTime = Time.parse(params[:end])
        new_swap = Swap.create!(name: params[:name], start: startTime, end: endTime)
        render json: new_swap, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end

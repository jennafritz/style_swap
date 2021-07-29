class ClothingsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :clothing_not_found
rescue_from ActiveRecord::RecordInvalid, with: :show_errors
before_action :find_clothing, only: [:show, :destroy, :update]

    def destroy
        @clothing.destroy
        render json: {}, status: :accepted
    end

    def show
        render json: @clothing
    end

    def create
        new_clothing = Clothing.create!(clothing_params)
        render json: new_clothing, status: :created
    end

    def update
        @clothing.update!(clothing_params)
        render json: @clothing, status: :accepted
    end

    def remove_user_ids
        updated_clothing_array = []
        params[:array].each do |clothing|
            found_clothing = Clothing.find(clothing[:id])
            found_clothing.update!(user_id: nil)
            updated_clothing_array << found_clothing
        end
        render json: {result: updated_clothing_array, message: "Clothing successfully updated"}, status: :accepted
    end
    

    def fetch_user_clothings
        user_clothings = Clothing.where({user_id: params[:user_id]})
        render json: user_clothings, each_serializer: ClothingIndexSerializer
    end

    private

    def find_clothing
        @clothing = Clothing.find(params[:id])
    end

    def clothing_not_found
        render json: {error: 'Clothing not found'}, status: :not_found
    end

    def clothing_params
        params.permit(:name, :color, :brand, :category, :image_url, :condition, :description, :size, :value, :user_id)
    end

    def show_errors(exception)
        render json: {error: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end

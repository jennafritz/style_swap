class ClothingSerializer < ActiveModel::Serializer
  attributes :id, :name, :color, :brand, :size, :condition, :description, :value, :user_id, :image_url, :category
end

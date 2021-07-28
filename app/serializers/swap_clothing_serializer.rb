class SwapClothingSerializer < ActiveModel::Serializer
  attributes :id, :clothing_id, :swap_id, :prev_owner_id

  belongs_to :clothing
end

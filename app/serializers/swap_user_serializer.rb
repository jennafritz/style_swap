class SwapUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :swap_id, :credits

  belongs_to :swap
end

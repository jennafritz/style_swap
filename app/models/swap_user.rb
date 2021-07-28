class SwapUser < ApplicationRecord
    validates :user_id, uniqueness: {scope: [:swap_id]}
    belongs_to :user
    belongs_to :swap
end

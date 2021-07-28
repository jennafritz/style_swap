class Clothing < ApplicationRecord
    belongs_to :user, optional: true
    has_many :swap_clothings, dependent: :destroy
    has_many :swaps, through: :swap_clothings
end

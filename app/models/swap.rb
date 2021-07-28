class Swap < ApplicationRecord
    has_many :swap_users
    has_many :users, through: :swap_users
    has_many :swap_clothings
    has_many :clothings, through: :swap_clothings
end

class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }

    has_many :clothings
    has_many :swap_users
    has_many :swaps, through: :swap_users
end

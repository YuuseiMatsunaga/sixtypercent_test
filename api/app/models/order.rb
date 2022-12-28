class Order < ApplicationRecord
    belongs_to :user
    belongs_to :shop
    has_many :order_carts
    has_many :variations, through: :order_carts
end
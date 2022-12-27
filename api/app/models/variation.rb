class Variation < ApplicationRecord
    belongs_to :product
    has_many :orders, through: :order_carts
    enum size: {S: 1, M: 2, L: 3, LL: 4, O: 5}
end
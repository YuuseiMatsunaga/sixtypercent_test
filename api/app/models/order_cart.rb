class OrderCart < ApplicationRecord
    belongs_to :variation
    belongs_to :order
end
class Product < ApplicationRecord
    belongs_to :shop
    has_many :variations, dependent: :destroy
end
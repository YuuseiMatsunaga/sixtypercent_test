# frozen_string_literal: true
module Types
  class ProductType < ::Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :price, Integer, null: false
    field :valiation, String
    field :shop_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :shop, Types::ShopType, null: false
    field :variations, [Types::VariationType], null:false
  end
end

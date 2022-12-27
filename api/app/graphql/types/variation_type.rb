# frozen_string_literal: true

module Types
  class VariationType < Types::BaseObject
    field :id, ID, null: false
    field :product_id, Integer, null: false
    field :color, String, null: false
    field :size, Types::VariationSizeEnum, null: false
    field :product, Types::ProductType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end

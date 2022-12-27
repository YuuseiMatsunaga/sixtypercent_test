# frozen_string_literal: true

module Types
    class OrderCartType < Types::BaseObject
      field :id, ID, null: false
      field :variation, Types::VariationType, null: false
      field :order, Types::OrderType, null: false
      field :quantity, String, null: false
      field :created_at, GraphQL::Types::ISO8601DateTime, null: false
      field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    end
  end
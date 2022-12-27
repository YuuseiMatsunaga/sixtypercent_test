module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :products, [Types::ProductType], null: true 
    def products(**args)
      Product.all
    end

    field :orders, [Types::OrderType], null: true do
      argument :shop_id, Int, required: true
      argument :from, String, required: false
      argument :to, String, required: false
    end

    def orders(**args)
      shop_id = args[:shop_id]
      start_period = args['from'].to_s.in_time_zone
      end_period   = args['to'].to_s.in_time_zone
      Order.where(shop_id: shop_id).where(created_at: (start_period..end_period))
    end

    field :shops, [Types::ShopType], null: true
    def shops(**args)
      Shop.all
    end
  end
end

class AddQuantityToOrderCarts < ActiveRecord::Migration[7.0]
  def change
    add_column :order_carts, :quantity, :integer, null: false, after: :order_id
  end
end

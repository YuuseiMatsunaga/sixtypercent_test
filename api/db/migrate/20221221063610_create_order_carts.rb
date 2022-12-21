class CreateOrderCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :order_carts do |t|
      t.integer :product_id, null: false
      t.integer :order_id, null: false

      t.timestamps
    end
  end
end

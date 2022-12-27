class ChangeProductsAndOrderCarts < ActiveRecord::Migration[7.0]
  def change
    change_table :products do |t|
      t.remove :valiation
    end

    change_table :order_carts do |t|
      t.rename :product_id, :variation_id
    end
  end
end

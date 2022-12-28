class AddShopIdToOrder < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :shop_id, :integer, null: false, after: :user_id
  end
end

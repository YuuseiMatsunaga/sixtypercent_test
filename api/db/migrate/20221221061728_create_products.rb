class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.integer :price, null: false
      t.string :valiation
      t.integer :shop_id, null: false

      t.timestamps
    end
  end
end

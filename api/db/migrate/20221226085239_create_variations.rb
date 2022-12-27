class CreateVariations < ActiveRecord::Migration[7.0]
  def change
    create_table :variations do |t|
      t.integer :product_id, null: false
      t.string :color, null: false
      t.integer :size, limit: 1

      t.timestamps
    end
  end
end

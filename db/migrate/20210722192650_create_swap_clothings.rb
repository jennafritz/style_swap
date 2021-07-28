class CreateSwapClothings < ActiveRecord::Migration[6.1]
  def change
    create_table :swap_clothings do |t|
      t.integer :clothing_id
      t.integer :swap_id
      t.integer :prev_owner_id

      t.timestamps
    end
  end
end

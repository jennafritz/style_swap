class CreateClothings < ActiveRecord::Migration[6.1]
  def change
    create_table :clothings do |t|
      t.string :name
      t.string :color
      t.string :brand
      t.integer :size
      t.string :condition
      t.string :description
      t.integer :value
      t.integer :user_id
      t.string :image_url
      t.string :category

      t.timestamps
    end
  end
end

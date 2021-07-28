class CreateSwaps < ActiveRecord::Migration[6.1]
  def change
    create_table :swaps do |t|
      t.datetime :start
      t.datetime :end
      t.string :name

      t.timestamps
    end
  end
end

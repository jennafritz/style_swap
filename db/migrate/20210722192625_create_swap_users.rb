class CreateSwapUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :swap_users do |t|
      t.integer :user_id
      t.integer :swap_id
      t.integer :credits

      t.timestamps
    end
  end
end

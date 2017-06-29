class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.integer :channel_id, null: false
      t.integer :user_id, null: false


      t.timestamps null: false
    end

    add_index :subscriptions, [:user_id, :channel_id], unique: true

  end
end

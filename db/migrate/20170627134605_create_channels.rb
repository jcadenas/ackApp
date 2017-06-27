class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.integer :team_id, null: false
      t.string :name, null: false
      t.string :purpose

      t.timestamps null: false
    end

    add_index :channels, [:team_id, :name], unique: true

  end
end

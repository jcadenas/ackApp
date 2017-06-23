class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.text :description
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :teams, :name, unique: true
  end
end

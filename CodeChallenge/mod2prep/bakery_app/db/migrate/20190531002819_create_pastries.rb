class CreatePastries < ActiveRecord::Migration[5.2]
  def change
    create_table :pastries do |t|
      t.integer :calory
      t.string :name

      t.timestamps
    end
  end
end

# Create your costume_stores migration here

class CreateCostumeStores < ActiveRecord::Migration[4.2]

  def change
    create_table :costume_stores do |t|
      t.string :name
      t.string :location
      t.integer :num_costumes   #costume inventory
      t.integer :num_employees
      t.boolean :store_status
      t.datetime :opening_time
      t.datetime :closing_time
    end
  end

end

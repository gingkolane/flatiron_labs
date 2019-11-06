class CreateJoins < ActiveRecord::Migration
  def change

    create_table :joins do |t|
      t.integer :artist_id
      t.integer :instrument_id
    end 
    
  end
end

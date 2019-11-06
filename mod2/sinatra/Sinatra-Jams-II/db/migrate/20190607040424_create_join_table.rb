class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :artists, :instruments do |t|
      t.integer :artist_id
      t.integer :instrument_id
    end 
  end
end

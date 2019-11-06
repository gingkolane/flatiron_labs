class CreateJoinArtistsInstruments < ActiveRecord::Migration
  
  def change

    create_table :artists_instruments do |t|
      t.integer :artist_id
      t.integer :instrument_id
    end

  end
end

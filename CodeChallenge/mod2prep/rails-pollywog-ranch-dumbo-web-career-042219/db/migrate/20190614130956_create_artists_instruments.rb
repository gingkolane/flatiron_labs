class CreateArtistsInstruments < ActiveRecord::Migration[5.0]
  def change
    create_table :artists_instruments do |t|
      t.references :artist, foreign_key: true
      t.references :instrument, foreign_key: true

      t.timestamps
    end
  end
end

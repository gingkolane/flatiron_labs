class ChangeTableName < ActiveRecord::Migration
  def change
    rename_table :artists_instruments, :artist_instruments
  end
end

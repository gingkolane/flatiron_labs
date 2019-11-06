class CreateJoinTableFang < ActiveRecord::Migration[5.2]
  def change
    create_join_table :artists, :instruments do |t|
      t.references :artist, foreign_key: true
      t.references :instrument, foreign_key: true
    end
  end
end

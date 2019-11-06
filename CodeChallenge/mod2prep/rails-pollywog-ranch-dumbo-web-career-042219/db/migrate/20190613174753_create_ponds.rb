class CreatePonds < ActiveRecord::Migration[5.0]
  def change
    create_table :ponds do |t|
      t.string :name
      t.string :water_type

      t.timestamps
    end
  end
end

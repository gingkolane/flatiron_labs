class CreateFangs < ActiveRecord::Migration[5.2]
  def change
    create_table :fangs do |t|
      t.references :house, foreign_key: true
      t.references :furnitur, foreign_key: true

      t.timestamps
    end
  end
end

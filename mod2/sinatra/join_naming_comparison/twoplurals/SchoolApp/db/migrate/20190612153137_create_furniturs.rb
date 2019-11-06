class CreateFurniturs < ActiveRecord::Migration[5.2]
  def change
    create_table :furniturs do |t|

      t.timestamps
    end
  end
end

class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.string :name
      t.belongs_to :user, foreign_key: true
      t.belongs_to :pastry, foreign_key: true

      t.timestamps
    end
  end
end

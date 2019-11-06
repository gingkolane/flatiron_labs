class CreatJoinTableCustomerProduct < ActiveRecord::Migration[5.0]
  def change
    create_join_table :customers, :products do |t|
      t.references :customer, foreign_key: true
      t.references :product, foreign_key: true
    end
  end
end

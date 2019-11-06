# Create your costume_stores migration here

class ChangeNumCostumesToCostumeInventory < ActiveRecord::Migration[4.2]

  def change
    rename_column :costume_stores, :num_costumes, :Costume_Inventory
  end

end

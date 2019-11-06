# Create your costume_stores migration here

class RenameCostumeInventory < ActiveRecord::Migration[4.2]

  def change
    rename_column :costume_stores, :Costume_Inventory, :costume_inventory
  end

end

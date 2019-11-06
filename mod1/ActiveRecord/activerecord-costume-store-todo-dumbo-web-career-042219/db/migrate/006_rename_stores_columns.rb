# Create your costume_stores migration here

class RenameStoresColumns < ActiveRecord::Migration[4.2]

  def change
    rename_column :costume_stores, :num_employees, :num_of_employees
    rename_column :costume_stores, :store_status, :still_in_business
  end


end

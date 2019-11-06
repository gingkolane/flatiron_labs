class CreateVoters < ActiveRecord::Migration
  def change
    create_table :voters do |t|
      # t.integer voter_id
      t.string :voter_name
    end
  end
end

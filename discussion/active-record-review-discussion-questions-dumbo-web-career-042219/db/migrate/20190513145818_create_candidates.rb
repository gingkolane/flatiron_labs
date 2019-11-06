class CreateCandidates < ActiveRecord::Migration
  def change
    create_table :candidates do |t|
      # t.integer :candidate_id
    t.string :name
    end
  end
end

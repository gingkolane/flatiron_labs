class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      # t.integer vote_id
      t.integer candidate_id
      t.integer voter_id 
    end
  end
end

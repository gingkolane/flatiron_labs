class Join < ActiveRecord::Base

  belongs_to :artist
  belongs_to :instrument

end

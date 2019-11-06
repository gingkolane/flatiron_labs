class Tadpole < ApplicationRecord
  belongs_to :frog
  delegate :pond, :to => :frog, :allow_nil => true

end

class Frog < ApplicationRecord
  belongs_to :pond
  has_many :tadpoles

end


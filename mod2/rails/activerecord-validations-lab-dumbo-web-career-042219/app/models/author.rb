class Author < ActiveRecord::Base

#   1. All authors have a nanme, No two authors have the same name
  validates :name, presence: true, uniqueness: true

# 1. Author phone numbers are exactly ten digits
  validates :phone_number, numericality: { only_integer: true }, length: { is: 10 }
  # validates :phone_number, length: { is: 10 }

end

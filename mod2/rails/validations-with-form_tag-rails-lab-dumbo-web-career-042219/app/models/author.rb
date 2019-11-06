class Author < ActiveRecord::Base

  # `name` is not blank
  validates :name, presence: true
  # `email` is unique
  validates :email, uniqueness: true
  # `phone_number` is exactly 10 digits long
  validates :phone_number, length: { is: 10 }


end

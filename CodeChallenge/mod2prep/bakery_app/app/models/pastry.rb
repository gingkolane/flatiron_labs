class Pastry < ApplicationRecord

  belongs_to :bakery
  
  has_many :purchases
  has_many :users, through: :purchases
  
end

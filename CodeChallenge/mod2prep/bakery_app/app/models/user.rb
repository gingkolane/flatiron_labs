class User < ApplicationRecord
  has_many :purchases
  has_many :pastries, through: :purchases
end

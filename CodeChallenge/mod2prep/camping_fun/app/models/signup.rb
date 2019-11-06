class Signup < ApplicationRecord
  belongs_to :camper
  belongs_to :activity

  validates :time, numericality: { only_integer: true }
  # validates :time, numericality: { greater_than_or_equal_to: 0 } 
  # validates :time, numericality: { less_than_or_equal_to: 23 } 
  validates :time, inclusion: { in: 0..10 }

  # [0..1]
  # , within: [0..23] 
end 
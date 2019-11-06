class Artist < ActiveRecord::Base
  has_many :artists_instruments 
  has_many :instruments, through: :artists_instruments
end

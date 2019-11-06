class Instrument < ActiveRecord::Base
  has_many :artists_instruments 
  has_many :artists, through: :artists_instruments
end

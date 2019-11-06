class Instrument < ActiveRecord::Base
  has_many :joins
  has_many :artists, through: :joins
end

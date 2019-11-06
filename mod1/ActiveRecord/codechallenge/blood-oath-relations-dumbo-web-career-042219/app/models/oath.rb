require 'pry'

class BloodOath

attr_accessor :cult, :follower

  @@all = []

  def initialize(cult, follower)  # initialize with the object
    @cult = cult
    @follower = follower

    @@all << self
  end

# Class methods
  # All the oaths in the Oath class
  def self.all
    @@all
  end

# Instance methods - relationship

  # method for oath-cult relation
  def oaths_of_a_cult
    binding.pry
    @@all.select {|oath| oath.cult == self.cult}
  end

  # Method for oath-follower relation
  def oaths_of_a_follower(follower)
    self.all.select {|oath| oath.follower == follower}
  end

def initiation_date(date_string)
  strftime

end
end

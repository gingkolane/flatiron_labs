class Cult

  attr_accessor :name, :location, :founding_year, :slogan, :oath

  @@all = []

  def initialize (name)
    @name = name
    @location = location
    @founding_year = founding_year
    @slogan = slogan

    @@all << self
  end

# Class methods
  def self.all
    @@all
  end

  def self.find_by_name(name)
    self.all.find {|cult| cult.name == name }
  end

  def self.find_by_location(location)
    self.all.select {|cult| cult.location == location}
  end

  def self.find_by_founding_year(year)
    self.all.select {|cult| cult.year == year}
  end

# helper function

  def followers
     self.oaths_of_a_cult.map {|oath| oath.follower}
  end

# instance methods
  def cult_population(cult)
    self.followers.count.to_i
  end

  def recruiter_follower(follower_object)
    self.followers << follower_object
  end
end

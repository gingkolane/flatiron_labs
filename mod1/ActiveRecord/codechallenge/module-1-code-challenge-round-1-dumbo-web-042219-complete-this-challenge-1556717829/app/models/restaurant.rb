class Restaurant
  attr_reader :name, :customer

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def reviews
    Review.all.select {|r|
    r.restaurant == self}
  end

  def customers
    self.reviews.map {|r| r.customer}
  end

  def average_star_rating

    allrating = self.reviews.map {|r| r.rating}

    allrating.inject(0.0) {|sum, rating|  sum + rating } /allrating.size
  end

def longest_review
  allcontent = self.reviews.map {|r| r.content}
  allcontent.max_by {|c| c.length}
end

def self.find_by_name(name)
  self.all.find {|r| r.name == name}
end

end

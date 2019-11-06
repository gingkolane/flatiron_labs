class Review
  # attr_reader :restaurant, :rating
  attr_accessor :content
  attr_reader :customer, :restaurant, :rating

  @@all = []
  def initialize(restaurant, content, rating, customer)
    @restaurant = restaurant
    @content = content
    @rating = rating
    @customer = customer
    @@all << self
  end

  def self.all
    @@all
  end

  def rating=(rating)
    if rating < 5 && rating > 1
      @rating = rating
    else
      puts "Please enter a rating between 1 to 5"
    end
  end

end

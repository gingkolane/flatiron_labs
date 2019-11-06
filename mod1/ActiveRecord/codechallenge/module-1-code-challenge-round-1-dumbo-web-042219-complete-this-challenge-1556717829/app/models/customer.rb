class Customer
  attr_reader :first_name, :last_name

  @@all = []
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name  = last_name
    @@all << self
  end

  def self.all
    @@all
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def add_review(restaurant, content, rating)
    review = Review.new(restaurant, content, rating, self)
  end

# helper method
  def reviews_of_thiscustomer
    Review.all.select {|r|
    r.customer == self }
  end

  def num_reviews
    self.reviews_of_thiscustomer.count
  end

   def restaurants
     self.reviews_of_thiscustomer.map {|r|
     r.restaurant}.uniq
   end

  # class methods
  def self.find_by_name(name)
    self.all.find {|c| c.full_name == name}
  end

  def self.find_all_by_first_name(first_name)
    self.all.select {|c| c.first_name == first_name}
  end

  def self.all_names
    self.all.map {|c| c.full_name}
  end

end

class Allergy

  attr_accessor :user, :ingredient, :allergy

  @@all = []


  def initialize(user, ingredient)
    @user = user
    @recipe = ingredient
     @@all << self
  end


  def self.all
    @@all
  end
end

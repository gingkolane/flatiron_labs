class User
  @@all = []
  attr_accessor :name, :allergy


  def initialize(name)
    @name = name
     @@all << self
  end


  def self.all
    @@all
  end

  # Help function to establish the one-to-many relationship between recipe and user.
  def recipecard_u
    RecipeCard.all.select do |rc|
      rc.user == self
    end
  # this gives us all the cards this user has
  end

  # Help function to establish the one-to-many relationship between ingredient and user.
  def allergy_u
    Allergy.all.select do |ui|
      ui.user == self
    end
  # this gives us all the ingredients this user is allergic to
  end

  def recipes
    self.recipecard_u.map do |ri|
    ri.recipe
    end
  end

  def add_recipe_card(recipe, date, rating)
    RecipeCard.new(self, recipe, date, rating)
  end

  def declare_allergy(ingredient)
    Allergy.new(self, ingredient)
  end

  def allergens
      self.allergy_u.select do |ri|
      ri.allergy
      end
    end

  end

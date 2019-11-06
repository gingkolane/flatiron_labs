class Ingredient

attr_accessor :name

  @@all = []

def initialize(name)
  @name = name
   @@all << self
end

  def self.all
    @@all
  end

# Help function to establish the one-to-many relationship between recipe and ingredients.
  def recipeingredients_i
  RecipeIngredient.all.select do |ri|
    ri.ingredient == self
  end
  end

# Help function to establish the one-to-many relationship between ingredient and user.
  def allergy_i
    Allergy.all.select do |ui|
      ui.ingredient == self
    end
  end

  def self.most_common_allergen
    self.all.max_by do |ingredient|
      ingredient.allergy_i.count
    end
  end
end
  # max_by gives the maximum value from the given block.

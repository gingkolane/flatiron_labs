require 'pry'

class Recipe

  attr_accessor :name, :recipecard

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end


  def self.all
    @@all
  end


  # Help function to establish the one-to-many relationship between recipe and user.
  def recipecard_r
    RecipeCard.all.select do |rc|
      rc.recipe == self
    end
  end

  # Help function to establish the one-to-many relationship between recipe and ingredients.
  def recipeingredients_r

    binding.pry
    RecipeIngredient.all.select do |ri|
      ri.recipe == self
    end
  end


  # to-do
  # highest number of users (the recipe that has the most recipe cards)
  # def self.most_popular
  #   recipe = RecipeCard.all.uniq
  #
  #   recipe.each do |r|
  #     count_max = 0
  #       RecipeCard.all.select |card|
  #       card = r
  #       count += 1
  #       end
  #     if count < count_max
  #     count_max = count
  #       RecipeCard.all.max_by do
  #   end
  # end

    def users
      self.recipecard_r.map {|card| card.user}
    end

  def ingredients
    self.recipeingredients_r.map do |ri|
    ri.ingredient
    end
  end

  def allergens
  end

  def add_ingredients(ingr_arr)



    recipeingredient << ingr

  end

  #
  #   RecipeIngredient.all.select do |ri|
  #     ri.ingredient == self
  #
  #   ingredient == self
  # end
#
# TODO
#
#
#   def allergens
#     Allergy.ingredient.all
#   end
#
end

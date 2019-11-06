require_relative '../config/environment.rb'


maccheese = Recipe.new("Mac'n'Cheese")
pbj = Recipe.new("Peanut Butter Jelly Sand")
eggroll = Recipe.new ("Egg Sammich")

larry = User.new("Larry")
seb = User.new("Seb")
chloe = User.new("Chloe")

bread = Ingredient.new("bread")
egg = Ingredient.new("egg")
peanutbutter = Ingredient.new("Peanut Butter")
jelly = Ingredient.new("Jelly")
cheese = Ingredient.new("cheese")
flour = Ingredient.new("flour")

sebpbj = RecipeCard.new(seb, pbj, "010119", 5)
chloeroll = RecipeCard.new(chloe, eggroll, "031417", 3)
chloepbj = RecipeCard.new(chloe, pbj, "050613", 10)

sebflour = Allergy.new(seb, flour)
chloejelly = Allergy.new(chloe, jelly)

pbj_ing = RecipeIngredient.new([peanutbutter, jelly, bread], pbj)
mac_ing = RecipeIngredient.new([flour, cheese], maccheese)

binding.pry

require_relative "lib/Animal.rb"
require_relative "lib/Zoo.rb"
require 'pry'

bx_zoo = Zoo.new("BX Zoo", "Bronx")
cpk_zoo = Zoo.new("CPK Zoo", "Manhattan")

big_tiger = Animal.new("tiger", "800lbs", "tigger")
small_monkey = Animal.new(
  "monkey", "30lbs", "curious george")
  huge_elephant = Animal.new("elephant", "12,000lbs","dumbo")

big_tiger.zoo = cpk_zoo
small_monkey.zoo = bx_zoo
huge_elephant.zoo = bx_zoo

#Test your code here


binding.pry
puts "done"

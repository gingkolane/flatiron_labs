require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

Chloe = Customer.new('Chloe','Liu')

John = Customer.new('John', 'Hill')

EAK = Restaurant.new('EAK')
Corona = Restaurant.new('Corona')

review1 = Review.new(EAK, "good and good", 5, Chloe)

review2 = Review.new(Corona,"bad and bad", 3, John )

binding.pry
0 #leave this here to ensure binding.pry isn't the last line

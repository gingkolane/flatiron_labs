require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console


cult1 = Cult.new("cult1")
cult2 = Cult.new("cult2")
cult3 = Cult.new("cult3")

follower1 = Follower.new("follower1")
follower2 = Follower.new("follower1")
follower3 = Follower.new("follower1")
followera = Follower.new("followera")
followerb = Follower.new("followerb")
followerc = Follower.new("followerc")

oath1_1 = BloodOath.new(cult1, follower1)
oath1_2 = BloodOath.new(cult1, follower2)
oath1_3 = BloodOath.new(cult1, follower3)

oath2_a = BloodOath.new(cult2, followera)
oath2_b = BloodOath.new(cult2, followerb)
oath2_c = BloodOath.new(cult2, followerc)

binding.pry

puts "Mwahahaha!" # just in case pry is buggy and exits

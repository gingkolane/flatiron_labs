# syntax: .each_with_index(item, index)

def roll_call_dwarves(name_arr)
  name_arr.each_with_index do |name, idx|
    puts "#{idx+1}. #{name}"
  end
end


def summon_captain_planet(planeteer_calls)
    # planeteer_calls.map {|x| "#{x[0].upcase}#{x[1..-1]}!"}
    planeteer_calls.map { |call| call.capitalize + '!' }
end

# capitalize the first letter of a word

# or
# planeteer_calls.map {|x| x[0].upcase + x[1..-1]+"!"}


def long_planeteer_calls(arr)

  arr.any? {|x| x.length > 4}

end

def find_the_cheese(arr)
  # the array below is here to help
  cheese_types = ["cheddar", "gouda", "camembert"]

  arr.find {|item| cheese_types.include?(item)}
end

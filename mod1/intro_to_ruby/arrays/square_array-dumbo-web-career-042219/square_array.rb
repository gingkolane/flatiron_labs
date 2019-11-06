# require 'pry'

def square_array(num_arr)

  new_arr = []

  num_arr.each do |n|
    new_arr.push(n**2)
  end

  new_arr
end

# square_array([1, 2, 3])
# Answer below:
# def square_array(array)
#   squared = []
#   array.each { |element| squared << element ** 2 }
#   squared
# end

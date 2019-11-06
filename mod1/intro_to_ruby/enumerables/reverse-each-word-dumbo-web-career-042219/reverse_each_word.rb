# require 'pry'

def reverse_each_word(str)

# Using .collect method
  arr = str.split(/ /)

  arr.collect {|x| x.reverse}.join(' ')

end

# reverse_each_word("Hello there, and how are you?")
  # convert string to array
  # https://www.techotopia.com/index.php/Ruby_String_Conversions

#   arr = str.split(/ /)
#
#   new_arr = []
#
#   arr.each do |ele|
#     new_arr.push(ele.reverse)
#   end
#
# # convert the new_arr to string
#   new_arr.join(' ')
# end

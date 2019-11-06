# # require 'pry'
# # how to define a prime number
# # First, take the square root (or the 1/2 power) of n; then round this number up to the next highest whole number and call the result m.  Then find all of the following quotients:
# #
# # qm = n / m
# # q(m-1) = n / (m-1)
# # q(m-2) = n / (m-2)
# # q(m-3) = n / (m-3)
# # . . .
# # q3 = n / 3
# # q2 = n / 2
# #
# # The number n is prime if -- and only if -- none of the q's, as derived above, are whole numbers.
#
#
# # Add  code here!
#
# def prime?(n)
#
# 	# A prime number is a whole number greater than 1 whose only factors are 1 and itself
# 	if n < 2
# 		return false
#
# 	elsif n == 2
# 		return true
#
# 	else
# 		# take the square root of int, then round up to whole number
# 		m = Integer.sqrt(n) + 1
# 		# turn number range into array
# 		num_arr = (2...m).to_a
# 		# if n/m..2 is a whole number, then it is not a prime number
# 		num_arr.each do |x|
# 			if n % x == 0
# 				return false
# 			end
# 		end
# 		return true
# 	end
# 	false
# end
#
# # if we need to return value in the middle of the method, must add "return" before the statement


# Solution:
def prime?(num)
  if num < 0 or num == 0 or num == 1
    return false
  else
    (2..num-1).to_a.all? do |possible_factor|
      num % possible_factor != 0
    end
  end
end

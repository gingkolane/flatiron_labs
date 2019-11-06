require 'pry'

def plus_two(num)
	num
	binding.pry
	puts num + 2
end

plus_two(3)

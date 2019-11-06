# Write your code here

def line(katz_deli)

	if katz_deli.empty?
	 puts "The line is currently empty."

	else
		line = "The line is currently: "
		katz_deli.each_with_index do |name, idx|
			line << "#{idx + 1}. #{name} "
		end  # don't forget to close "do ... end" pair with end
	# use chop to get rid of last space in the string
	puts line.chop
	end
end

def take_a_number(katz_deli, name)
	katz_deli.push(name)
	puts "Welcome, #{name}. You are number #{katz_deli.length} in line."

end


def now_serving(katz_deli)

	if katz_deli.empty?
	# if katz_deli.length == 0
		puts "There is nobody waiting to be served!"

	else
		puts "Currently serving #{katz_deli.first}."
		katz_deli.shift
	end

end

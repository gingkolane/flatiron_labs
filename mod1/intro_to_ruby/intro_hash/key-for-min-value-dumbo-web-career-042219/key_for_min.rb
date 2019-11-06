def key_for_min_value(name_hash)

	# if name_hash.empty?
	# 	return nil
	# end
#
# 	# define a min_value the other value can be compared to
# 	# min_value = 1000
# 	# min_key = :some
#
# better do it this way
	min_value = nil
	min_key = nil

	name_hash.collect do |name, value|

   # Must have "min_value = nil ||" otherwise give error message: comparison of Integer with nil failed
		if min_value == nil || value < min_value
			min_value = value
			min_key = name
		end
	end
	min_key
end

# Solution:
# def key_for_min_value(hash)
#   lowest_key = nil
#   lowest_value = nil
#   hash.each do |k, v|
#     if lowest_value == nil || v < lowest_value
#       lowest_value = v
#       lowest_key = k
#     end
#   end
#   lowest_key
# end

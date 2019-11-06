def oxford_comma(array)

	case array.length
# returns a string without any additional fomatting when given a 1-element array
		when 1
	    return array.first
# adds 'and' between elements when given a 2-element array
	  when 2
	    return array.join(" and ")

# adds commas plus a final 'and' when given a 3-element array
	  when 3
			return array[0, 2].join(', ') + ", and #{array.last}"

# correctly formats arrays of lengths greater than three
	  else
	    return array[0, array.length-1].join(", ") + ", and #{array.last}"
	end
end

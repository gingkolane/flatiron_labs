def sort_array_asc(int)
	int.sort
end

def sort_array_desc(int)

	int.sort { |x,y| y <=> x }

end

def sort_array_char_count(str_arr)
		str_arr.sort { |x,y| x.length <=> y.length }
end

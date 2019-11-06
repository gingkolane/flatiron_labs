# require 'pry'

# def my_select(collection)
#  # your code here!
#    if collection == []
#      "This block should not run!"
#
#    elsif block_given? == false
#      collection
#
#    else
#      output = []
#      i = 0
#      while i < collection.length
#        result = yield collection[i]
#
#        if result == true
#          output << collection[i]
#        end
#        i = i + 1
#      end
#      output
#    end
# end


def my_select(arr)
 output = []
 i = 0
 while i < arr.length

   if yield arr[i]
     output << arr[i]
   end
   i = i + 1
 end
 output

end

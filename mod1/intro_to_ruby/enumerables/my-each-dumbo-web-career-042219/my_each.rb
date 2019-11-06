def my_each(arr)
# if a block is given. block_given is a kernal keyword specially for this instance
  if block_given?
  i = 0
  while i < arr.length
    # this is the key of building yield, passing each element in the array yield to the block yield is going to do
    yield arr[i]
    i = i + 1
  end

  else
    "Hey! No block was given!"
  end


  # add this so my_each method returns the original arr, otherwise it returns nothing
  # this also means in the future we can build methods that returns different things.
  arr

end

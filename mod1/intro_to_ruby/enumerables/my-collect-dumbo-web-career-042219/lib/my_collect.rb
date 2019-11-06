

def my_collect(array)

  output = []

  i = 0
  while i < array.length
    # don't need this, but I like to have this step of the logic here
    yield array[i]
    # output.push(yield(array[i]))
    # Push or << shovel both works but shovel in this case is more elegant
    output << yield(array[i])
    i = i + 1
  end

  output
end

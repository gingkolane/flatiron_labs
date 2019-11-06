class Application

  @@items = ["Apples","Carrots","Pears"]

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/items/)
      @@items.each do |item|
        resp.write "#{item}\n"
      end
    elsif req.path.match(/search/)
      search_term = req.params["q"]
      resp.write handle_search(search_term)
    else
      resp.write "Path Not Found"
    end

    resp.finish
  end

  def handle_search(search_term)
    if @@items.include?(search_term)
      return "#{search_term} is one of our items"
    else
      return "Couldn't find #{search_term}"
    end
  end

# 1. Create a new class array called `@@cart` to hold any items in your cart
  @@cart = []  

# 2. Create a new route called `/cart` to show the items in your cart

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/cart/)
      if @@cart.length != 0
        @@cart.each do |item|
        resp.write "#{item}\n"
        end
      else
        resp.write "Your cart is empty"
      end

    end 
    resp.finish
  end

# 3. Create a new route called `/add` that takes in a `GET` param with 
# the key `item`. This should check to see if that item is in `@@items` and 
# then add it to the cart if it is. Otherwise give an error

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/add/)
      new_item = req.params["q"]

      if @@cart.include?(new_item)
        resp.write "this item exists in your cart already"
      else
        @@item << new_item
      end

    else 
      resp.write "Page not found"
    end
    resp.finish
  end

end

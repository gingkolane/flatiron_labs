# Make your shoe class here!

class Shoe

  def initialize(brand)
    @brand = brand
  end

attr_reader :brand
attr_accessor :color, :size, :material, :condition



  def cobble

    if condition = 'old'
      self.condition = 'new'
      puts "Your shoe is as good as new!"
    end
  end

end

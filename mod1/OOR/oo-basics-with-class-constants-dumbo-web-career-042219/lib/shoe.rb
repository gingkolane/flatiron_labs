class Shoe
  attr_accessor :color, :size, :material, :condition
  attr_reader :brand


  def initialize(brand)
    @brand = brand
    if BRANDS.include?(brand) != true
      BRANDS << brand
    end
  end

  BRANDS = []
  def BRANDS=(brands)
    @brands = brands
    BRANDS << brands.unique
  end

end



# this is a writer for brand, so it is brand=
# this situation is brand variable is a class constant, meaning it has a valuelist, and the valuelist is in BRANDS
# because it is a special writer, so we have to define the writer separately, instead of just using attr_writer or attr_accessor
  #

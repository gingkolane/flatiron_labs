class Animal

@@all = []

attr_reader :species, :nickname
attr_accessor :weight, :zoo

def initialize(species, weight, nickname)

@species = species
@weight = weight
@nickname = nickname
@@all << self

end

def self.all
  @@all
end

def self.find_by_species(species)
  self.all.select do |animal|
  animal.species == species
end
end

end

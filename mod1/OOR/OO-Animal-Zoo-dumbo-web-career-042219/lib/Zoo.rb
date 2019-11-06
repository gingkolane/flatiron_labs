class Zoo

@@all = []
attr_reader :name, :location

def initialize(name, location)

@name = name
@location = location
 @@all << self
end

def self.all
  @@all
end

# instance is provided when a instance variable is called
def animals
Animal.all.select do |animal|
  animal.zoo == self
end
end

def animal_species
  species_array = []
  Animal.all.each do |animal|
   species_array << animal.species
 end
 species_array.uniq
end

def find_by_species(species)
  Animal.all.select do |animal|
    animal.species == species
  end
end

def animal_nicknames
  Animal.all.map do |animal|
    animal.nickname
  end
end

def self.find_by_location(location)
  self.all.select do |zoo|
    zoo.location == location
  end
end
end

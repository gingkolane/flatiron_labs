require 'pry'
require_relative 'cat.rb'
require_relative 'dog.rb'
require_relative 'fish.rb'


class Owner
  attr_accessor :mood, :name, :pets
  attr_reader :species

  @@all = []
  @@count = 0

  def initialize(species)
    @species = species
    @pets = {:fishes => [], :dogs => [], :cats => []}
    @@all << self
    @@count += 1
    @@reset_all = 0
  end

  def self.all
    @@all
  end

  def self.count
    @@count
  end

  def self.reset_all
     @@count = 0
  end

  def say_species
    'I am a human.'
  end

  def buy_fish(fishname)
    fishname =  Fish.new(fishname)
    self.pets[:fishes].count + 1
    self.pets[:fishes] << fishname
  end

  def buy_cat(catname)
    catname = Cat.new(catname)
    self.pets[:cats].count + 1
    self.pets[:cats] << catname
  end

  def buy_dog(dogname)
    dogname = Dog.new(dogname)
    self.pets[:dogs].count + 1
    self.pets[:dogs] << dogname
  end

  def walk_dogs
    self.pets[:dogs].map do |dog|
    dog.mood = "happy"
    end
  end

  def play_with_cats
    self.pets[:cats].map do |cat|
    cat.mood = "happy"
    end
  end

  def feed_fish
    self.pets[:fishes].map do |fish|
    fish.mood = "happy"
    end
  end

  def sell_pets
    self.pets.each do |type, pets|
      pets.each do |pet|
      pet.mood = "nervous"
      end
      pets.clear
    end
  end

  def list_pets
    "I have #{self.pets[:fishes].count} fish, #{self.pets[:dogs].count} dog(s), and #{self.pets[:cats].count} cat(s)."
  end

end

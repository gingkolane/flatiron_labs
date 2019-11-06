# require 'pry'

class Dog
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all

    @@all.each {|dog| puts "#{dog.name}"}
    #
    # @@all.each do |dog|
    #  puts "#{dog.name}"
    # end

    # binding.pry
  end

  def self.clear_all
    self.all.clear
  end

end

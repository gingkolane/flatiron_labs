class Follower
  attr_accessor :name, :age, :life_motto, :oath
  
  @@all = []
  @@oath = []
  def initialize(name)
    @name = name
    @age = age
    @life_motto = life_motto

    @@all << self
    @@oath << self
  end

# class methods
  def self.all
    @@all
  end

  def self.oath
    @@oath
  end

  def self.of_a_certain_age(age)
    self.all.select {|f| f.age.to_i >= age}
  end

# istance methods
  def cults
    self.oath.map {|oath| oath.cult}
  end

  def join_cult(cult)
    new_follower = Follower.new(name, age, life_motto)
    cult.followers << new_follower
  end

end

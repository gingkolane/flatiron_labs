class Song

attr_accessor :artist, :genre, :name

  @@all = []

  def initialize(name, genre)
    @name = name
    @genre = genre
    @artist
    @@all << self
  end

  def self.all
    @@all
  end

end

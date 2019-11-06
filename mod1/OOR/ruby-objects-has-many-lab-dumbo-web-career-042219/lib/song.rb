class Song

attr_reader :name
attr_accessor :artist

  @@all = []

  def initialize(name)
    @name = name
    @artist = artist
    @@all << self
  end

  def self.all
    @@all
  end

  def artist_name
    self.artist.name
  end

  #


end

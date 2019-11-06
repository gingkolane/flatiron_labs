class Artist

attr_reader :name

  @@all = []


  def initialize(name)
    @name = name
    @@all << self
  end


  def self.all
    @@all
  end

  def new_song(name, genre)
binding.pry
    song = Song.new(name, genre)
    song.artist = self
    song.name = name
    song.genre = genre

  end

  def songs
    Song.all.select {|s| s.artist == self}
  end

  def genres
    self.songs.map {|s| s.genre}
  end







end

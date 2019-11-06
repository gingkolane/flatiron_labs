require 'pry'

class Artist

attr_reader :name
attr_accessor :name


  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def artist_name
    @artist_name = self.name
  end

  def songs
    Song.all.select do |song|
      if song.artist == self
        song.artist
      end
    end
  end

  def add_song(song)
    song.artist = self
  end

  def add_song_by_name(songname)
    song = Song.new(songname)
    song.artist = self
  end

  def self.song_count
     song_count = 0
    self.all.map do |artist|
      song_count += Song.all.artist.count
    end
    song_count

    binding.pry
  end

  binding.pry
end

require 'pry'

class Song

attr_accessor :name, :artist, :genre

  @@all = []
  @@count = 0
  @@genres = []
  @@artists = []

  def initialize(name, artist, genre)
    @name = name
    @artist = artist
    @genre = genre
    # binding.pry
    @@count += 1
    @@genres << genre
    @@artists << artist
    @@all << self
  end

  def self.all
    @@all
  end

  def self.count
    @@count
  end

  def self.artists
    @@artists.uniq
  end

  def self.genres
    @@genres.uniq
  end

  def self.genre_count
    # create genre_count hash
    genre_count = {}

    # self referes to class Song
    self.genres.each do |g|
      # loop through all songs to find this genre
      count = 0
      self.all.each do |song|
        binding.pry
        # every time a song's genre match, add one to the counter
        if song.genre == g
          count += 1
        end
        # add the final count to that genre key's value in genre_count's hash
        # h[:key] = "bar"
      end
      genre_count[g] = count
    end
    genre_count
  end

# the number of songs each artist is responsible for.
  def self.artist_count
    artist_count = {}

    self.artists.each do |a|
      count = 0
  # every time a song's genre match, add one to the counter
      self.all.each do |song|

        if song.artist = a
          count += 1
        end
  # add the final count to that genre key's value in genre_count's hash
        artist_count[a] = count
      end
      artist_count
    end
  end
end

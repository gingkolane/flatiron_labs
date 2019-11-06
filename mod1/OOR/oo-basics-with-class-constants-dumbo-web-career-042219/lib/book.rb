class Book
  attr_accessor :author, :page_count, :genre, :all
  attr_reader :title
  @@all = []
  GENRES = []

  def initialize(title)
    @title = title
    @@all << self
  end

  def turn_page
    puts "Flipping the page...wow, you read fast!"
  end

  def genre=(genre)
    @genre = genre
    GENRES << genre
  end

  def self.all
    @@all
  end

  # def self.genres
  #   @@genres
  # end

end

# create the writer for genre and add the logic for the class constant

require 'rest-client'
require 'json'
require 'pry'
require 'fuzzy_match'

def get_character_movies_from_api(character)
  #make the web request
  response_string = RestClient.get('http://www.swapi.co/api/people/')
  response_hash = JSON.parse(response_string)

  # iterate over the response hash to find the collection of `films` for the given `character`
  found_character = []

  response_hash["results"].find do |character_hash|
    # if character_hash["name"]== character

    if FuzzyMatch.character_hash["name"].find(character)
        found_character =  character_hash["films"]
        binding.pry
    end
  end

# collect those film API urls, make a web request to each URL to get the info for that film
# return value of this method should be collection of info about each film.
#  i.e. an array of hashes in which each hash reps a given film
# this collection will be the argument given to `print_movies`

  films = []
  found_character.each do |url|
    films << RestClient.get(url)
  end
  films
end


  #  and that method will do some nice presentation stuff like puts out a list
  #  of movies by title. Have a play around with the puts with other info about a given film.


def print_movies(films,character)
  # some iteration magic and puts out the movies in a nice list
puts "Movies #{character} is in:"
  films.each do |each_film_hash|
    response_hash = JSON.parse(each_film_hash)

  puts " #{response_hash["title"]}."
  end
end


def show_character_movies(character)
  films = get_character_movies_from_api(character)
  print_movies(films, character)
end

## BONUS

# that `get_character_movies_from_api` method is probably pretty long. Does it do more than one job?
# can you split it up into helper methods?

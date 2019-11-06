# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all
Instrument.destroy_all

10.times do
  Artist.create(name: Faker::Name.name, age: rand(1..100), bio: Faker::Hipster.sentence)
end

5.times do
  Instrument.create(name: Faker::Music.instrument, brand: Faker::Company.name)
end

# ArtistInstrument.create(artist_id: 1, instrument_id: 1)
# ArtistInstrument.create(artist_id: 1, instrument_id: 2)
# ArtistInstrument.create(artist_id: 2, instrument_id: 3)
# ArtistInstrument.create(artist_id: 2, instrument_id: 4)

puts "File has been seeded! 🍀"
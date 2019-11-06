Artist.destroy_all
Instrument.destroy_all

10.times do
  Artist.create(name: Faker::Name.name, age: rand(1..100), bio: Faker::Hipster.sentence)
end

5.times do
  Instrument.create(name: Faker::Music.instrument, brand: Faker::Company.name)
end

# ArtistsInstrument.create(artist_id: 1, instrument_id: 1)
# ArtistsInstrument.create(artist_id: 1, instrument_id: 2)
# ArtistsInstrument.create(artist_id: 2, instrument_id: 3)
# ArtistsInstrument.create(artist_id: 2, instrument_id: 4)

puts "File has been seeded! 🍀"

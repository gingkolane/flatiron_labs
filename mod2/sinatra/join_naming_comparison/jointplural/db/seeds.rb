Artist.destroy_all
Instrument.destroy_all
ArtistInstrument.destroy_all

10.times do
  Artist.create(name: Faker::Name.name, age: rand(1..100), bio: Faker::Hipster.sentence)
end

5.times do
  Instrument.create(name: Faker::Music.instrument, brand: Faker::Company.name)
end

5.times do
  ArtistInstrument.create(artist: Artist.all.sample, instrument: Instrument.all.sample)  
end

# ArtistInstrument.create(artist_id: Artist.all.sample.id, instrument_id: Instrument.all.sample.id)


puts "File has been seeded! 🍀"

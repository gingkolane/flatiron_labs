Artist.destroy_all
Instrument.destroy_all

10.times do
  Artist.create(name: Faker::Name.name, age: rand(1..100), bio: Faker::Hipster.sentence)
end

5.times do
  Instrument.create(name: Faker::Music.instrument, brand: Faker::Company.name)
end

Join.create(artist_id: 11, instrument_id: 1)
Join.create(artist_id: 11, instrument_id: 2)
Join.create(artist_id: 12, instrument_id: 3)
Join.create(artist_id: 12, instrument_id: 4)

puts "File has been seeded! 🍀"

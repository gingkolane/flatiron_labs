# Artist.destroy_all
# Instrument.destroy_all
# Join.destroy_all

# 10.times do
#   Artist.create(name: Faker::Name.name, age: rand(1..100), bio: Faker::Hipster.sentence)
# end

# 5.times do
#    Instrument.create(name: Faker::Music.instrument, brand: Faker::Company.name)
# end

# Artist.find_by(id: 51) << Instrument.find(11)
artist1 = Artist.first
artist2 = Artist.last


instrument1 = Instrument.first
instrument2 = Instrument.last
instrument3 = Instrument.find(7)
instrument4 = Instrument.find(8)

Join.create(artist_id: artist1.id, instrument_id: instrument1.id)
Join.create(artist_id: artist1.id, instrument_id: instrument4.id)
Join.create(artist_id: artist2.id, instrument_id: instrument1.id)
Join.create(artist_id: artist2.id, instrument_id: instrument2.id)
Join.create(artist_id: artist2.id, instrument_id: instrument3.id)

# ArtistInstruments.create(artist1, instrument2)
# artist1.instruments << instrument1
# artist1.instruments << instrument2
# artist2.instruments << instrument2


puts "File has been seeded! 🍀"

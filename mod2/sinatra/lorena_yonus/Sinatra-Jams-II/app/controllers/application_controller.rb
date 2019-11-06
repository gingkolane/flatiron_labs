require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get '/join' do
    @artists = Artist.all
    @instruments = Instrument.all

    erb :join
  end

  post '/join' do
    puts params
    # join = Join.create(params)
    binding.pry
    Join.create(artist_id: artist1.id, instrument_id: instrument1.id)
  end


end

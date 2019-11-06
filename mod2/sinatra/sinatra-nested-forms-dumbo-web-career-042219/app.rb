require './environment'

module FormsLab
  class App < Sinatra::Base

    get '/' do
      erb :root
    end 

    # a blank form 
    get '/new' do 
      erb :'pirates/new'
    end

    # after user fill in the information
    post '/pirates' do
      @pirate = Pirate.new(params[:pirate])

      params[:pirate][:ships].each do |shipinfo|
        Ship.new(shipinfo)
      end 

      @ships = Ship.all

      erb :'pirates/show'

    end
  end
end
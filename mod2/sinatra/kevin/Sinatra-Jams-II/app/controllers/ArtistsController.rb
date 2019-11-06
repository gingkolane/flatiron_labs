class ArtistsController < ApplicationController
  
  get "/artists" do
    @artists = Artist.all
    erb :'artists/index'
  end

  get "/artists/new" do
    @artist = Artist.new
    erb :'artists/new'
  end

  get "/artists/:id" do
    @artist = Artist.find(params[:id])
    erb :'artists/show'
  end

  get "/artists/:id/edit" do
    @artist = Artist.find(params[:id])
    erb :'artists/edit'
  end

  patch "/artists/:id" do
    @artist = Artist.find(params[:id])
    @artist.update(params[:artist])
    redirect to "/artists/#{@artist.id}"
  end

  post "/artists" do
    @artist = Artist.create(params[:artist])
    redirect to "/artists"
  end

  delete "/artists/:id" do
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect to "/artists"
  end

end

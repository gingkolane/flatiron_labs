class EpisodesController < ApplicationController

  def index
    @episodes = Episode.all
   
  end

  def show
 # view all the guests for a episode
    @episode = Episode.find(params[:id])
    @guests = @episode.guests
  end 
end

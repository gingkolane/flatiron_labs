class GuestsController < ApplicationController

  def index
    @guests = Guest.all
  end

  def show
    # has name and occupation
    @guest = Guest.find(params[:id]) 
  end 

end

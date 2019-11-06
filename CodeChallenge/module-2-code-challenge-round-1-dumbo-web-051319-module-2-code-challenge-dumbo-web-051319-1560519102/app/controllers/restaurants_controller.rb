class RestaurantsController < ApplicationController
  
  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end 

  def search
    @restaurant = Restaurant.find_by(name: params[:q])
  end 

end

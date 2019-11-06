class AppearancesController < ApplicationController

  def new
    @appearance = Appearance.new
  end 

  def create
    @appearance = Appearance.new(appearance_params)
    if @appearance.valid?
      @appearance.save
      redirect_to appearance_path(@appearance)
    else 
      # render :new
      redirect_to new_appearance_path
    end 
  end 


  def show
    @appearance = Appearance.find(params[:id])
  end 


  private 

  def appearance_params
    params.require(:appearance).permit(:episode_id, :guest_id, :rating)
  end 

  def set_appearance
    Appearance.new(params[:id])
  end 
end

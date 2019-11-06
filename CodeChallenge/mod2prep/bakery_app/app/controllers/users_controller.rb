class UsersController < ApplicationController

  def index
    @users = User.all
  end 
  
  def show
    @user = User.find(params[:id])
    @purchases
    @pastries

  end 

  
  # private
  #   def purchase_params
  #     params.require(:purchase).permit(:calory, :name)
  #   end 


end

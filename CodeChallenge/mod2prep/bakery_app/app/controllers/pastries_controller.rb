class PastriesController < ApplicationController

before_action :find_pastry

def index
  @pastries = Pastry.all
end 

def show
  @pastry = Pastry.find(params[:id])
end 

def show_one_bakery

end 


def new
  @pastry = Pastry.new
end 

def destroy
  @pastry.destroy
  redirect_to pastries_path
end 

private

  def find_pastry
    @pastry = Pastry.find(params[:id])
  end 

  def pastry_params
    params.require(:pastry).permit(:calory, :name)
  end 
end

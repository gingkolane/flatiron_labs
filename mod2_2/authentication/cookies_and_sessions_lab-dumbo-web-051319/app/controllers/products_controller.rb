class ProductsController < ApplicationController


    # def index
    #   @product
    # end 

    # def add
    #   # Load the cart from the session, or create a new empty cart
    #   # cart = session[:cart] || []
    #   cart << @product

    #   # save the cart in the session
    #   session[:cart] = cart
    # end 


  def index
  end

  def add
    cart << params[:product]
    render :index
  end

end 
class ProductsController < ApplicationController


  def index
  end 

  def add
    # @product = Product.create(product_params)
    # current_cart << @product.id
    # redirect_to cart_path(user) 
    cart << params[:product]
    render :index
  end 


  # private
  # def product_params
  #   params.require(:product).permit(:name)
  # end

end 
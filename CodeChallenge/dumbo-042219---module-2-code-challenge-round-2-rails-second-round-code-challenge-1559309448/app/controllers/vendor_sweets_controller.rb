class VendorSweetsController < ApplicationController

  def index
    @vendor_sweets = VendorSweet.all
  end 

  def new
    @vendor_sweet = VendorSweet.new
  end 

  def create
    @vendor_sweet = VendorSweet.new(vendor_sweet_params)

    if @vendor_sweet.price.valid? 
      @vendor_sweet.save
      redirect_to vendor_path(vendor_sweet_params[:vendor_id])
    else
      flash[:errors] = @vendor_sweet.errors.full_messages
      redirect_to new_vendor_sweet_path
    end
  end 

  def edit 
    @vendor_sweet = VendorSweet.find(params[:id])
  end

  private

  def vendor_sweet_params
    params.require(:vendor_sweet).permit(:price, :sweet_id, :vendor_id)
  end 

end

class PurchasesController < ApplicationController

  def index
    @purchases = Purchase.all
  end 
  
  def create
    @purchase = Purchase.create(purchase_params)
    @purchase.save
    redirect_to purchase_path(@purchase)
  end 

  
  private
    def purchase_params
      params.require(:purchase).permit(:calory, :name)
    end 

end

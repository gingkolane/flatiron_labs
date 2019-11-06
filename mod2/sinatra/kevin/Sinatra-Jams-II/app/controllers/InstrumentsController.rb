class InstrumentsController < ApplicationController

  get "/instruments" do
    @instruments = Instrument.all
    erb :'instruments/index'
  end
  #
  # get "/instruments/new" do
  #   @instrument = Instrument.new
  #   erb :'instruments/new'
  # end

  get "/instruments/:id" do
    @instrument = Instrument.find(params[:id])
    erb :'instruments/show'
  end

  # get "/instruments/:id/edit" do
  #   @instrument = Instrument.find(params[:id])
  #   erb :'instruments/edit'
  # end
  #
  # patch "/instruments/:id" do
  #   @instrument = Instrument.find(params[:id])
  #   @instrument.update(params[:instrument])
  #   redirect to "/instruments/#{@instrument.id}"
  # end
  #
  # post "/instruments" do
  #   @instrument = Instrument.create(params[:instrument])
  #   redirect to "/instruments"
  # end
  #
  # delete "/instruments/:id" do
  #   @instrument = Instrument.find(params[:id])
  #   @instrument.destroy
  #   redirect to "/instruments"
  # end

end

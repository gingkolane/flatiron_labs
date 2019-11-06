class SessionsController < ApplicationController

  def login
  end

  def create
    session[:name] = params[:name]
    redirect_to controller: 'sessions', action:'home'
  end

  # def create
  #   return redirect_to(controller: 'sessions', action: 'new') if !params[:name] || params[:name].empty?
  #   session[:name] = params[:name]
  #   redirect_to controller: 'application', action: 'hello'
  # end

  def home
  end 

  def logout
    session.delete :name
    render controller: 'sessions', action: 'logout'
  end

end

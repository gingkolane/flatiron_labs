class SessionsController < ApplicationController

  def current_user 
  end 

  def welcome
  end

  def login

    redirect_to '/welcome'
  end 

end


# class SessionsController < ApplicationController
#   def new
#   end

#   def create
#     return redirect_to(controller: 'sessions', action: 'new') 
      # if !params[:name] || params[:name].empty?
#     session[:name] = params[:name]
#     redirect_to controller: 'application', action: 'hello'
#   end

#   def destroy
#     session.delete :name
#     redirect_to controller: 'application', action: 'hello'
#   end
# end
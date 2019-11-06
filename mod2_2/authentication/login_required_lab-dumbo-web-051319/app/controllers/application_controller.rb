class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def hello
    redirect_to controller: 'sessions', action: 'new' unless session[:name]
  end

  def current_user
    session[:name]
  end 


  private 

  def require_login
    if session.include? :username
      return head(:forbidden) 
    else
      redirect_to login_path
    end 
  end 

end
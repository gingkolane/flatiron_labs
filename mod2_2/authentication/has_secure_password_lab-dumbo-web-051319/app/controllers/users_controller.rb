class UsersController < ApplicationController

  def new
    @user = User.new
  end 

  def create
    # if password_match
      @user = User.create(user_params)
      redirect_to controller: 'users', action: 'welcome'
    # else 
    #   redirect_to new_user_path
    # end 
  end 

  # def create
  #   @user = User.create(user_params)
  #   return redirect_to controller: 'users', action: 'new' unless @user.save
  #   session[:user_id] = @user.id
  #   redirect_to controller: 'welcome', action: 'home'
  # end




  def welcome
    @user = User.find(params[:id])
  end 

  def login

    @user = User.find_by(username: params[:username])
    if params[:password] == @user.password
      redirect 'welcome/#{@user.id}'
    else
      redirect new_user_path
    end 
  end 


  private 

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end 

  def password_match
    params[:password] == params[:password_confirmation]
  end 

end

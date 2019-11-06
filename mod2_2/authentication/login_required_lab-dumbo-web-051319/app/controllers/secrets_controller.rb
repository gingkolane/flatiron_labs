class SecretsController < ApplicationController
  before_action :require_login

  def secret
  end

  private

  def require_login

    if session.include? :name
      render 'show'
    else 
      return head(:forbidden)
      redirect_to(controller: 'sessions', action: 'login')
    end
  end 

end

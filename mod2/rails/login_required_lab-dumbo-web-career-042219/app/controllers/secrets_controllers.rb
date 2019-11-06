class SecretsController < ApplicationController

  # Write a SecretsController using a before_action to prevent any route from being accessed without logging in.
  def require_login
    return head(:forbidden) unless session.include? :user_id
  end

end 

# solution
# class SecretsController < ApplicationController
#   before_action :require_logged_in
  
#   def show
#   end
# end

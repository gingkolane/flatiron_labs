class DestinationsController < ApplicationController

  def show
    @destination = Destination.find(params[:id])
    
    @recent_five=@destination.posts.order("created_at")[0...4]
    
    @most_liked= @destination.posts.max_by(&:likes)

    @age_array= @destination.bloggers.uniq.map{|blogger| blogger.age}
    @average_age = @age_array.sum/@age_array.length

  end 


end 
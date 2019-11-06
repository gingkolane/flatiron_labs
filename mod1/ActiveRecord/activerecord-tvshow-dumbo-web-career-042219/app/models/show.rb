class Show < ActiveRecord::Base

# Class Show will inherit from ActiveRecord::Base 

  # many class methods inherited including: .new, .create(new+save), .all, .first, .last, .find, .find_by, .count... 
  # Some intance methods including: #save, #update, #delete
  def highest_rating
    
    self.maximum(:rating)

    # self.all.map |show|
    # rating_array = show.rating
    # end

    # rating_array.maximum
  end 

  def most_popular_show
    self.where('rating = ?', self.highest_rating).first
    # self.highest_rating
  end 

  def lowest_rating

    self.maximum(:rating)
    # self.all.map {|show| rating_array = show.rating}
  
    # rating_array.minimum

  end 

  def least_popular_show
    self.where("rating = ?", self.lowest_rating).first
    # self.lowest_rating
  end 


  def ratings_sum
    self.sum(:rating)
    # rating_array = self.all.map {|show| show.rating}
    # rating_array.sum
  end

  def popular_shows
    # self.all.select {|show| show.rating > 5}
    self.where("rating >= ?", 5)
  end
  
  def shows_by_alphabetial_order
    self.order(:name)
  end 

end 

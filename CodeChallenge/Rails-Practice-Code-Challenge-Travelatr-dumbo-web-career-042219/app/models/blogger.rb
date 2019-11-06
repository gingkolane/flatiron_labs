class Blogger < ApplicationRecord
  has_many :posts
  has_many :destinations, through: :posts


  validates :name, uniqueness: true
  validates :age, numericality: { greater_than: 0 }
  # validates :bio, length: { greater_than: 30 }

  # def total_likes
  #   likes_array = @blogger.posts.map {|post| post.likes} 
  #   total_likes = likes_array.inject(:+)
  # end
  def total_likes
    posts.map {|post| post.likes}.inject(:+)
  end

  def mosted_liked_blog
    posts.max_by(&:likes)
  end
end
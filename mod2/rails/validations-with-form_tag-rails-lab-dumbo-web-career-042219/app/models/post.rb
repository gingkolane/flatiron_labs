class Post < ActiveRecord::Base

  # `title` is not blank
  validates :title, presence: true

  # `content` is at least 100 characters long
  validates :content, length: { minimum: 100 }

  # `category` is either `"Fiction"` or `"Non-Fiction"`
  validates :category, inclusion: { in: %w(Fiction Non-Fiction)}
end

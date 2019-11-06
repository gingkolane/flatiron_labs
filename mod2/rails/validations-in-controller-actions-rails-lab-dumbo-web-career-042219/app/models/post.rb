class Post < ActiveRecord::Base

  # 1. The title cannot be blank
  validates :title, presence: true
  # 1. The category is either `"Fiction"` or `"Non-Fiction"`
  validates :category, inclusion: { in: %w(Fiction Non-Fiction)}
  # 1. The content is at least 100 characters long.
  validates :content, length: { minimum: 100 }
end
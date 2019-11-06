class Post < ActiveRecord::Base

#   1. All posts have a title
# 1. Post content is at least 250 characters long
# 1. Post summary is a maximum of 250 characters
# 1. Post category is either `Fiction` or `Non-Fiction`
validates :title, presence: true
validates :content, :length => { greater_than: 250 }
validates :summary, :length => { maximum: 250 }
validates :category, :inclusion => { in: %w(Fiction Non-Fiction)} 

validate :title :clickbait-y 

def is_not_clickbait-y
  if title.match () == "kevin"
    "Won't Believe", "Secret", "Top
    [number]", or "Guess"
    stringObj.match(/regex/)
    errors.add(:name, 'This title is not clickbaity.')
  end
end

CLICKBAIT_PATTERNS = [/won]
def clickbait
if title 
end 
add a custom validator to `Post` that ensures the title is sufficiently
clickbait-y. If the title does not contain "Won't Believe", "Secret", "Top
[number]", or "Guess", the validator should return false.
end

validates :category, inclusion: { in: %w(Fiction Non-Fiction) }
validate :is_clickbait?

CLICKBAIT_PATTERNS = [
  /Won't Believe/i,
  /Secret/i,
  /Top [0-9]*/i,
  /Guess/i
]

def is_clickbait?
  if CLICKBAIT_PATTERNS.none? { |pat| pat.match title }
    errors.add(:title, "must be clickbait")
  end
end
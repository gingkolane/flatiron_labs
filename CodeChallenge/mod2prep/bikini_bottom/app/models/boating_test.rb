class BoatingTest < ApplicationRecord
  belongs_to :instructor
  belongs_to :student
  
  validates :test_name, presence: true
  validates :test_name, length: { maximum: 20 }
  validates :instructor_id, presence: true
  validates :student_id, presence: true

end

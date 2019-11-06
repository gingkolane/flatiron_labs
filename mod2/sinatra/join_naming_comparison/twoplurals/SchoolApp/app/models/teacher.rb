class Teacher < ApplicationRecord

  has_many :students_teachers
  has_many :students, through: :students_teachers

end

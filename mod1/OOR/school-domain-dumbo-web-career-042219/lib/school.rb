

class School

  attr_reader :roster

  def initialize(school)
    @school = school
    @roster = {}
  end

  def add_student(student, grade)
    if @roster[grade].nil?
      @roster[grade] = [student]
    else
      @roster[grade] << student
    end
# # use ||= to add new key/value pair to hash
#     @roster[grade] ||= []
#     @roster[grade] << student
  end

  def grade(grade)
    @roster[grade]
  end

  def sort

    @roster.map do |grade,students|
      @roster[grade] = students.sort
    end
    @roster
  end

end

class Student

  attr_accessor :first_name

  @@all = []

  def initialize(first_name)
    @first_name = first_name
    @@all << self
  end

  def add_boating_test(student_object, test_name, test_status, instructor_object)
    new_test = BoatingTest.new(self, test_name, test_status, instructor_object)
  end

  def self.find_student(student_first_name)
    found_student = BoatingTest.all.select do |test|
    test.student.first_name = student_first_name
    end 
  end

# Student#grade_percentage should return the percentage of tests that the student has passed, a Float (so if a student has passed 3 / 9 tests that they've taken, this method should return the Float 33.33)

  def grade_precentage
    # foundtests is an array storing tests that the student has passed
    foundtests = BoatingTest.all.select do |tests|
    tests.student == self && tests.test_status == passed
    end

    grade_percentage = foundtests.count/BoatingTest.all.count.to_f
  end

end

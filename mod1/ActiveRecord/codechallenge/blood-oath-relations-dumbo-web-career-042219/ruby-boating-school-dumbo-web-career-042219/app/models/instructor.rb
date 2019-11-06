class Instructor
@@all = []
  def initialize(name)
    @name = name

    @@all << self
  end

  def pass_student(student_object, test_name)

    BoatingTest.all.select do |bt|
      if bt.student = student && bt.test_name = test_name
      bt.test_status = "passed"
    end
    bt
  end

  def fail_student(student_object, test_name)

     found_student = BoatingTest.all.find do |bt|
       bt.student = student && bt.test_name = test_name
     end

     if found_test
       found_test.test_status = "failed"
      else
        student.add_boating_test
      end

  end
end

end

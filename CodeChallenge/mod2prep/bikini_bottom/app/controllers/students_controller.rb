class StudentsController < ApplicationController


  def show
    @student = Student.find(params[:id])
    @boating_tests = @student.boating_tests
  end
  
end 
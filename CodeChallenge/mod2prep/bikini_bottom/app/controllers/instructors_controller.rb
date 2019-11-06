class InstructorsController < ApplicationController

  def index
    @instructors = Instructor.all
  end 

  def show
    @instructor = Instructor.find(params[:id])
    
    @students = @instructor.students
  end 

end 
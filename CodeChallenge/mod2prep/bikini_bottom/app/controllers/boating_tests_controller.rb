class BoatingTestsController < ApplicationController


  def new
    @boating_test = BoatingTest.new
    @student = @boating_test.student
    @instrutor = @boating_test.instructor 
  end

  def create
    @boating_test = BoatingTest.create(boating_test_params)

    redirect_to boating_test_path(@boating_test)
  end 

  def show
    @boating_test = BoatingTest.find(params[:id])
    @status_text  = "Not Completed"
    @status_text = "Completed" if @boating_test.completed 
  end 

  def edit
    @boating_test = BoatingTest.find(params[:id])
  end

  def update
    @boating_test = BoatingTest.find(params[:id])

    @boating_test.update(boating_test_params)

    redirect_to boating_test_path(@boating_test.id)
  end 

  private 

  def boating_test_params
    params.require(:boating_test).permit(:test_name, :student_id, :instructor_id, :completed)
  end 

end 
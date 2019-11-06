class Manager

  attr_accessor :name, :department, :age,
  attr_writer:

  def age=(age)
    @age = age.to_f
  end

  def employees
  end
end

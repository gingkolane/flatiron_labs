class Student < User

  def initialize(first_name, last_name)
    super
    @knowledge = []
  end

  def learn(string)
    @knowledge << string
  end

  def knowledge
    @knowledge
  end
end

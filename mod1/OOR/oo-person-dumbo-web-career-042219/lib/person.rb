require 'pry'
# your code goes here
class Person
attr_reader :name
attr_accessor :bank_account

  def initialize(name)
    @name = name
    @happiness = 8
    @bank_account = 25
    @hygiene = 8
  end

#  setter for happiness (is happiness a symbol or string)
  def happiness=(idx)

    if idx > 10
      idx = 10
    end

    if idx < 0
      idx = 0
    end

    @happiness = idx

  end

# getter for happiness
  def happiness
    @happiness
  end

# setter for hygiene
  def hygiene=(idx)

    # if idx > 10
    #   idx = 10
    # end
    idx = 10 if idx >10
    idx = 0 if idx < 0
    # if idx < 0
    #   idx = 0
    # end

    @hygiene = idx

  end
# getter for hygiene

  def hygiene
    @hygiene

  end


  def happy?
    if happiness > 7
      true
    else
      false
    end

  end

  def clean?
    if hygiene > 7
      true
    else
      false
    end

  end

  def get_paid(salary)
    @bank_account += salary
    "all about the benjamins"
  end

  def take_bath
    idx_afterbath = @hygiene + 4
    self.hygiene=(idx_afterbath)
    '♪ Rub-a-dub just relaxing in the tub ♫'
  end


  def work_out

    self.hygiene -= 3
    # syntactic sugar
    # self.hygiene=(@hygiene - 3)

    # idx_afterworkout = @hygiene - 3
    # self.hygiene=(idx_afterworkout)

    self.happiness += 2
    # idx_happiness = @happiness + 2
    # self.happiness=(idx_happiness)

    '♪ another one bites the dust ♫'
  end

  def call_friend(friend)

    self.happiness += 3
    # idx_happiness = @happiness + 3
    # self.happiness=(idx_happiness)

    friend.happiness += 3

    "Hi #{friend.name}! It's #{self.name}. How are you?"
  end

def start_conversation(person, topic)
  if topic == "politics"
    self.happiness -= 2
    person.happiness -= 2
    'blah blah partisan blah lobbyist'
  elsif topic == "weather"
    self.happiness += 1
    person.happiness += 1
    'blah blah sun blah rain'
  else topic == "other"
    'blah blah blah blah blah'
  end

end

end

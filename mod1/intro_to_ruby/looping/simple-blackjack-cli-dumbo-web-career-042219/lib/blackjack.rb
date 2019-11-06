def welcome
  # code #welcome here
  puts "Welcome to the Blackjack Table"
end

def deal_card
  # code #deal_card here
  deal_card = rand(1..11)
  card = deal_card
end

def display_card_total(card)
  # code #display_card_total here
  card +=
  puts "Your cards add up to #{card}"
end

def prompt_user
  # code #prompt_user here
  puts "Type 'h' to hit or 's' to stay"
end

def get_user_input
  # code #get_user_input here
  answer = gets.chomp()
  
end

def end_game
  # code #end_game here
  puts "Sorry, you hit #{card}. Thanks for playing!"
end

def initial_round
  # code #initial_round here
  times.2 deal_card
  puts "Your cards add up to #{card}"

end

def hit?
  # code hit? here
end

def invalid_command
  # code invalid_command here
end

#####################################################
# get every test to pass before coding runner below #
#####################################################

def runner
  # code runner here
end

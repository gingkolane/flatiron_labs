<!-- # Week 1, Day 2 Morning Discussion Questions -->

def greet(name)
  puts "Hello, #{name}"
end
greet("Steven")

binding.pry



#
# 2 . What does this method return?

def hate_steven?(name)
  if name == "Steven"
    "OMG He's the worst"
  else
    "You cool"
  end
end


# 3 . How would you select all of the words that start with the letter "a" from the below array?
# #
["apple", "pear", "face", "champagne", "palm tree", "aardvark", "pineapple"].select {|x| x.starts_with? 'a'}



4 . Write a method that takes in an argument of a sentence and returns the
number of words in the sentence

```ruby
word_count("Hi, isn't this a great and interesting sentence??")
 # => 8
```

5 . What will the following method return?

```ruby
def rude_greeting(name=nil)
 name ||= "you jerk"
 puts "Hey there, #{name}"
end
```

6 . What will the following `puts`?

```ruby
best_animal = "cat"
favorite_animal = best_animal
puts favorite_animal
# => ?
```

7 . What will the following `puts`?

```ruby
def my_favorite_animal
  "cat"
end

best_animal = my_favorite_animal

puts best_animal
```

8 . What error, if any, will the following code raise?

```ruby
"Blink" + 182
```

9 . How would you `puts` out any and all foods that are delicious?

```ruby
foods = {"pie" => "delicious", "broccoli" => "not delicious",
"carrots" => "not delicious", "apples" => "delicious",
"peanut butter" => "delicious"}
```

10 . Delete all elements of the `foods` hash that are *not* delicious.

11 . What is the return value of this method?
```ruby
  character_names = ["Daenerys Targaryen", "Jon Snow" ,"Arya Stark", "Tyrion Lannister", "Sansa Stark", "Cersei Lannister", "Margaery Tyrell"]

  def downcase_all(array_of_strings)
    array_of_strings.each do |one_string|
      one_string.downcase
    end
  end
```

12 . Write a method that `puts` out a random Archer quote.
```ruby
  archer = {
      "name" => "Sterling Mallory Archer",
      "co-workers"=> ["Lana Kane", "Cyril Figgis", "Cheryl Tunt", "Pam Poovey", "Dr Krieger"],
      "favorite_drink" => "Bloody Mary",
      "Quotes" => ["I swear to god, I had something for this", "Phrasing", "Boop", "Danger Zone", "Read a book", "Do you not?", "Can't or won't?"]
  }
```

<p class='util--hide'>View <a href='https://learn.co/lessons/immersive-week-1-discussion-questions'>Immersive Week 1 Discussion Questions</a> on Learn.co and start learning to code for free.</p>

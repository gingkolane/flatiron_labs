def first_challenge
  contacts = {
    "Jon Snow" => {
      name: "Jon",
      email: "jon_snow@thewall.we",
      favorite_icecream_flavors: ["chocolate", "vanilla", "mint chip"],
      knows: nil
    },
    "Freddy Mercury" => {
      name: "Freddy",
      email: "freddy@mercury.com",
      favorite_icecream_flavors: ["strawberry", "cookie dough", "mint chip"]
    }
  }

  #your code here
# # Method 1
#     contacts.each do |person, data|
#       if person == "Freddy Mercury"
#       data.each do |attribute, value|
#         if attribute == :favorite_icecream_flavors  #symbol or string, this place is attribute name as it is,
#           value.delete_if{|value| value == "strawberry"}
#         end
#       end
#     end
#   end

 # method 2
  contacts["Freddy Mercury"][:favorite_icecream_flavors].delete_if{|value| value == "strawberry"}

  # Method 3


  #remember to return your newly altered contacts hash!
  contacts
end

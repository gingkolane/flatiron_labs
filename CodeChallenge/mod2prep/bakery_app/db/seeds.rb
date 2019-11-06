# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bakery.create(name: 'Andrew Bakery', location: "34 west 14th")
Bakery.create(name: 'Micky Bakery', location: "33 west 14th")
Bakery.create(name: 'Miles Bakery', location: "32 west 14th")
Bakery.create(name: 'Wei Bakery', location: "31 west 14th")


User.create(name: 'Dan')
User.create(name: 'Kevin')
User.create(name: 'Helen')
User.create(name: 'Graham')
User.create(name: 'Michelle')

Pastry.create(calory: '155', name:'scone')
Pastry.create(calory: '15', name:'Mantou')
Pastry.create(calory: '44', name:'Breadstick')
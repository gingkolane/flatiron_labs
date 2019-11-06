# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Student.create(name: "Chloe")
Student.create(name: "John")
Student.create(name: "Micky")
Student.create(name: "Seb")
Student.create(name: "Aaron")

Teacher.create(name: "Helen")
Teacher.create(name: "Dan")
Teacher.create(name: "Kevin")
Teacher.create(name: "Greg")
Teacher.create(name: "Eric")


5.times do
  StudentsTeacher.create(student:Student.all.sample, teacher: Teacher.all.sample)
end 

puts "File has been seeded! 🍀"
# Write your code here.

# name = "Arel"
#
# attendees = ["Edsger", "Ada", "Charles", "Alan", "Grace", "Linus", "Matz"]

def badge_maker(name)
	"Hello, my name is #{name}."
end

# we need return values from this method for next step, so we use map
def batch_badge_creator(attendees)
	attendees.map {|name| badge_maker(name)}
end

def assign_rooms(attendees)
	room_assignments = []
	attendees.each_with_index do |item, index|
		mesg = 	"Hello, #{item}! You'll be assigned to room #{index + 1}!"
		room_assignments.push(mesg)
	end
	room_assignments
end

def printer(attendees)
	batch_badge_creator(attendees).each {|badge| puts badge}
	assign_rooms(attendees).each {|assignment| puts assignment}
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

classAv = ClassAv.create([

	{ name: 'Karate', 
	  date: DateTime.new(2022, 5, 29, 22, 35, 0),
	  quotas: 15
	},
	{
	  name: 'Aerobicos', 
	  date: DateTime.new(2022, 3, 29, 22, 35, 0),
	  quotas: 15
	}
])

booking = Booking.create([

	{ user_id: 1, 
	  clas_id: 1,
	  date: DateTime.new(2022, 5, 29, 22, 35, 0)
	},
	{
	  user_id: 1, 
	  clas_id: 2,
	  date: DateTime.new(2022, 5, 29, 22, 35, 0)
	}
])

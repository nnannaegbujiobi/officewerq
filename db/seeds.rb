# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create({name:"David",email:"David@gmail.com",bio:"Dopechinoo!!",gender:"male",image:"image",level:"beginner",password:"33333"})

users = User.create({name:"Mike",email:"Mike@gmail.com",bio:"klangin and Banging!!",gender:"male",image:"image",level:"advanced",password:"55555"})

users = User.create({name:"Joseph",email:"Joseph@gmail.com",bio:"blah blah blah!!",gender:"male",image:"image",level:"beginner",password:"77777"})



workouts = Workout.create({name:"Yoga flow",time:"20mins",image:"image",description:"find your center with some Yoga",level:"beginner"})
workouts = Workout.create({name:"Fury burn",time:"15mins",image:"image",description:"Go hard with an intense strength and condition workout",level:"intermediate"})
workouts = Workout.create({name:"Muscle Madness",time:"15mins",image:"image",description:"Get Jack with this muscle building program",level:"advanced"})


user_workouts = UserWorkout.create({user_id:2,workout_id:3})

user_workouts = UserWorkout.create({user_id:1,workout_id:4})

user_workouts = UserWorkout.create({user_id:3,workout_id:1})
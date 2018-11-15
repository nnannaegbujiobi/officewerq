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
workouts = Workout.create({name:"Muscle Madness",time:"15mins",image:"http://www.thelongrun.com.au/wp-content/uploads/Lunges-800x450.jpg",description:"Get Jack with this muscle building program",level:"advanced"})

workouts = Workout.create({name:"Cardio Chair",time:"15mins",image:"https://imgur.com/a/ZeZNMhu",description:"Get your cardio in without leaving your desk!",level:"beginner"})

workouts = Workout.create({name:"Chair Abs",time:"15mins",image:"https://imgur.com/a/ZeZNMhu",description:"Crunch those abs while your crunching those numbers!",level:"beginner"})

workouts = Workout.create({name:"Cardio Check",time:"15mins",image:"https://imgur.com/a/ZeZNMhu",description:"Cardio...Check...Check!",level:"beginner"})

workouts = Workout.create({name:"Cardio Grind",time:"15mins",image:"https://imgur.com/a/ZeZNMhu",description:"Get your grind on with some fun cardio!",level:"beginner"})

workouts = Workout.create({name:"Cardio Party",time:"15mins",image:"CardioParty.jpg",description:"Its a party at the office so sweat it out!",level:"beginner"})

workouts = Workout.create({name:"Power Hold",time:"15mins",image:"PowerHold.jpg",description:"Start your strength track now with the Power Hold!",level:"beginner"})

workouts = Workout.create({name:"Rainmaker",time:"15mins",image:"Rainmaker.jpg",description:"Bring The Rain!",level:"beginner"})


workouts = Workout.create({name:"Seated Boxer",time:"15mins",image:"SeatedBoxer.jpg",description:"Kick some serious butt while gettub ready for that next presentation!",level:"beginner"})

workouts = Workout.create({name:"Stapler",time:"15mins",image:"Stapler.jpg",description:"The Stapler enough said!",level:"beginner"})


workouts = Workout.create({name:"Upperbody Press",time:"15mins",image:"UpperbodyPress.jpg",description:"Upperbody work lets go!",level:"beginner"})




user_workouts = UserWorkout.create({user_id:2,workout_id:3})

user_workouts = UserWorkout.create({user_id:1,workout_id:4})

user_workouts = UserWorkout.create({user_id:3,workout_id:1})
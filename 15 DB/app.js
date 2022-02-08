const { log } = require('console');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema( {
  name: String,
  rating: Number,
  review: String,

} );

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "An apple a day, keeps the doctor away"
});

// fruit.save();


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Josh",
  age: 20
})

person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 5,
  review: "so-so"
});

const banana = new Fruit({
  name: "Banana",
  rating: 9,
  review: "nice tast and famous among the masses"
});

const mango = new Fruit({
  name: "Mango",
  rating: 10,
  review: "King of the Fruits"
});

// Fruit.insertMany([kiwi, banana, mango], function(err){
//   if(err){
//     console.log("error occurred"+err);
//   }
//   else{
//     console.log("insertion successful");
//   }
// })

Fruit.find(function (err, fruits){
  if(err) {
    console.log(err);
  } else{

    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
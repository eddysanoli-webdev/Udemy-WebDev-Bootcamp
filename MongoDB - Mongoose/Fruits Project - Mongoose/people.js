// Dependencies
const mongoose = require("mongoose");

// Connect to database
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    auth: {
        username: 'test',
        password: 'test123'
    },
    authSource: "admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// =======================
// FAVORITE FRUIT
// =======================

// Create new "fruit" schema
// (Template for a "fruit" object. You can add validation by specifying specific properties)
const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: String
})

// Create new "fruit" model
// (Similar to a collection)
const Fruit = mongoose.model("Fruit", fruitSchema);

// Create new fruit objects
const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 9,
    review: "Too much water"
});

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});

// Save the pineapple
pineapple.save();

// =======================
// ADD NEW PERSON
// =======================

// Create new "people" schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
})

// Create new "people" model
const Person = mongoose.model("People", personSchema);

// Create new "person" objects
// (In the "favoriteFruit" field they will have an embedded document)
const renata = new Person ({
    name: "Renata",
    age: 24,
    favoriteFruit: pineapple
})

const john = new Person ({
    name: "John",
    age: 69,
    favoriteFruit: kiwi
})

Person.insertMany([renata, john], (err) => {
    if (err) console.log(err);
    else {
        console.log("Successfully inserted the people listed");
        mongoose.connection.close();
    }
})

// =======================
// DELETE MULTIPLE
// =======================

/*
// Delete multiple people with name "John"
Person.deleteMany({name: "John"}, (err) => {
    if (err) console.log(err); 
    else {
        console.log("Successfully deleted multiple documents");  
        mongoose.connection.close();
    }
})
*/


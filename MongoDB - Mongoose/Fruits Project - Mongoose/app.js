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
// ADD NEW FRUIT
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

// Create new object
const fruit = new Fruit ({
    name: "Peach",
    rating: 10,
    review: "Peaches are nice."
});

// Save new fruit into database
//fruit.save();

// =======================
// ADD MULTIPLE FRUIT
// =======================

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird texture"
});

/*
Fruit.insertMany([kiwi, orange, banana], function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully saved all the fruits to fruitDB");
    }
})
*/

// =======================
// FIND ALL FRUITS
// =======================

Fruit.find( (err, fruits) => {
    if (err) {
        console.log(err);
    }
    else {
        // Close the database connection
        mongoose.connection.close();

        // Print the name of all the fruits
        fruits.forEach( (fruit) => {
            console.log(fruit.name);
        })
    }
})

// =======================
// UPDATE RECORD
// =======================

/*
// - First argument: Properties to identify the object to modify
// - Second argument: Properties of the object to change
Fruit.updateOne({id: "61ee60eaa143a8209efedf8f"}, {name: "Tomato"}, function(err) {
    if (err) console.log(err);
    else console.log("Successfully updated the document");
})
*/

// =======================
// DELETE RECORD
// =======================

/*
// Delete the "Potato" record (as it is not a fruit)
Fruit.deleteOne({name: "Potato"}, (err) => {
    if (err) console.log(err);
    else console.log("Successfully deleted the document");
});
*/



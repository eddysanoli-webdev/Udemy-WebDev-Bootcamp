// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const _ = require('lodash');

// Include custom module
const date = require(__dirname + "/date.js");

// =======================
// SETUP
// =======================

// Express pseudonim
const app = express();

// Set app view engine 
// (EJS is not the only package that does this, but its the most popular)
app.set("view engine", "ejs");

// Use body parser to process POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Set static files path for express
app.use(express.static(`public`));

// =======================
// MONGOOSE
// =======================

// Connect to database (todolistDB)
mongoose.connect("mongodb://localhost:27017/todoListDB", {
    auth: {
        username: 'test',
        password: 'test123'
    },
    authSource: "admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// ITEMS -----------

// List item schema
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Todo list item model (Should be capitalized)
// - First arg: Singular collection name
// - Second arg: Schema name
const Item = mongoose.model("Item", itemSchema);

// Create three items in the list
const task1 = new Item ({name: "Welcome to your To Do List!"});
const task2 = new Item ({name: "Add new tasks by pressing '+'"});
const task3 = new Item ({name: "👈 Remove tasks by selecting them"});

// List of the default tasks
const defaultItems = [task1, task2, task3];

// LISTS -----------

// Schema for new lists
const listSchema = new mongoose.Schema ({
    name: String,
    items: [itemSchema]
});

// List model 
const List = mongoose.model("List", listSchema);

// =======================
// GET REQUESTS
// =======================

// GET: Display main page (common tasks)
app.get('/', (req, res) => {
    
    // Get current date
    let day = date.getDate();

    // Get all items from DBs
    Item.find({}, (err, items) => {

        // Insert default items into the DB if it is empty
        if (items.length === 0) {
            Item.insertMany(defaultItems, (err) => {
                if (err) console.log(err);
                else console.log("Successfully added default tasks");
            })
        }

        // Render the templates
        // Javascript will look inside views, and look for the file "list.ejs"
        // It will also send two arguments back to the template: day and tasks
        res.render("list", {listTitle : day, tasks: items}); 
    })

});

// GET: Custom to do list
app.get("/:listName", (req, res) => {

    // Retrieve name from route
    const listName = _.capitalize(req.params.listName);

    // Check all existing lists
    List.findOne({name: listName}, (err, list) => {

        // If list exists: Render existing items
        if (list) {
            res.render("list", {listTitle : listName, tasks: list.items}); 
        }

        // If list doesnt exist: Create new list
        else {

            // Create new list object
            const list = new List ({
                name: listName,
                items: defaultItems
            })

            // Save the list collection
            list.save();

            // Render the template with the new list name and default items
            res.redirect(`/${listName}`);

        }
    });
});

// GET: About page
app.get("/about", (req, res) => {
    res.render("about");
})

// =======================
// POST REQUESTS
// =======================

// POST: Get new task text
app.post("/", (req, res) => {

    // Get the list name (Button with plus sign)
    const listName = req.body.list;

    // Create new item object w/ new task text
    const newItem = new Item ({name: req.body.newTask});

    // If current list = home route list
    if (listName === date.getDate()){

        // Insert new item into the database
        newItem.save();
        
        // Render new changes
        res.redirect("/");
    }

    // If current list = custom list
    else {

        // Steps:
        // 1. Push new item into the corresponding list
        // 2. Save the changes onto the database
        // 3. Redirect to the corresponding page
        List.findOne({name: listName}, (err, foundList) => {
            if (err) console.log(err);
            else {
                foundList.items.push(newItem);
                foundList.save();
                res.redirect(`/${listName}`);
            }
        })

    }
});

// POST: Delete task after checking it
app.post("/delete", (req, res) => {

    // Get the current list name in which the "checking" was done
    const listName = req.body.listName;

    // Get ID of checked item
    const checkedItemID = req.body.checkbox;

    // IF: We are on the main route
    if (listName == date.getDate()){

        // Remove the item from the database
        Item.findByIdAndRemove(checkedItemID, (err) => {
            if (err) console.log(err);
            else res.redirect("/");
        })
    }

    // IF: We are on a custom list
    else {

        List.findOneAndUpdate(
            {name: listName},                           // Condition: List with the selected name
            {$pull: {items: {_id: checkedItemID}}},     // Update: Remove item from items list with the given ID
            (err, result) => {                          // Callback
                if (err) console.log(err);
                else res.redirect(`/${listName}`);      // Redirect to the custom list
            }
        )

    }
});


// =======================
// ENABLE SERVER
// =======================

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})

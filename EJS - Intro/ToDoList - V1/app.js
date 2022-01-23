// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Include custom module
const date = require(__dirname + "/date.js");

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
// GLOBAL VARIABLES
// =======================

// Even though its declared as a constant, its possible to modify the value of
// a const (With a push), but not completely change it to a new array (reassign).
const commonTasks = []; 
const workTasks = [];

// =======================
// GET REQUESTS
// =======================

// GET: Display main page (common tasks)
app.get('/', (req, res) => {
    
    // Get current date
    let day = date.getDate();

    // Render the templates
    // Javascript will look inside views, and look for the file "list.ejs"
    // It will also send two arguments back to the template: day and tasks
    res.render("list", {listTitle : day, tasks: commonTasks}); 

});

// GET: Display work tasks
app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", tasks: workTasks})
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

    // Get new task text
    let newTask = req.body.newTask;

    // Check the list to which the task has to be added
    if (req.body.list === "Work") {
        workTasks.push(newTask);
        res.redirect("/work");
    }
    else {

        // Push new task onto the task array
        commonTasks.push(newTask);
        
        // Render new changes
        // - Change value of newTask
        // - Add new task to the array of tasks
        // - Redirect to home route to reflect the changes
        res.redirect("/");
    }

})


// =======================
// ENABLE SERVER
// =======================

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})

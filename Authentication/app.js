// Dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const md5 = require("md5");

/*
=====================
SETUP
=====================
*/

// Express pseudonim
const app = express();

// Path for static files
app.use(express.static("public"));

// Use EJS as a view engine (templating)
app.set("view engine", "ejs");

// Use body parser with UTF-8 encoding
app.use(bodyParser.urlencoded({ extended: true}));

/*
=====================
MONGOOSE
=====================
*/

// Connect to database (todolistDB)
mongoose.connect("mongodb://localhost:27017/userDB", {
    auth: {
        username: 'test',
        password: 'test123'
    },
    authSource: "admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// User schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Article model
const User = mongoose.model("User", userSchema);

/*
=====================
GET REQUESTS
=====================
*/

// GET: Home page
app.get("/", (req, res) => {
    res.render("home");
})

// GET: Login page
app.get("/login", (req, res) => {
    res.render("login");
})

// GET: Register page
app.get("/register", (req, res) => {
    res.render("register");
})

/*
=====================
POST REQUESTS
=====================
*/

// POST: Register new user
app.post("/register", (req, res) => {

    // Retrieve the data from the form body using body parser
    // (We hash the password using md5)
    let username = req.body.username;
    let password = md5(req.body.password);

    // Create a new user object
    const newUser = new User({
        email: username,
        password: password
    });

    // Save the new user into the database
    // (Encrypts password in the process)
    newUser.save((err) => {
        if (err) console.log(err);
        else res.render("secrets");
    })

})

// POST: Login page
app.post("/login", (req, res) => {

    // Retrieve the data from the form body using body parser
    // (Login password must be hashed to be correctly compared with the stored password)
    let username = req.body.username;
    let password = md5(req.body.password);

    // Check credentials against the database
    // (Decrypts password in the process)
    User.findOne(

        // Find the user with the same credentials
        { email: username},

        // Callback
        (err, foundUser) => {
            if (err) console.log(err);
            else {

                // If a matching user exists
                // (Password only appears decrypted inside "foundUser")
                if (foundUser) {
                    console.log(foundUser);
                    if (foundUser.password === password) res.render("secrets");
                    else res.send("Email exists. Incorrect Password");
                }
                else {
                    console.log("No matching user found");
                    res.redirect("/");
                }
            }
        }
    )

})


/*
=====================
SERVER LISTENING
=====================
*/

app.listen(3000, () => {
    console.log("Server started on port 3000");
})
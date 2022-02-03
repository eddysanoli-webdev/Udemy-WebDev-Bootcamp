// Dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

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

// Setup the session
app.use(session({
    secret: process.env.MONGOOSE_SECRET,
    resave: false,
    saveUninitialized: true
}))

// Initialize passport package and use passport to manage the session
app.use(passport.initialize());
app.use(passport.session());

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
// (Password is not required. Passport will check if its missing)
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// Add passport plugin to mongoose
userSchema.plugin(passportLocalMongoose);

// Article model
const User = mongoose.model("User", userSchema);

// Setup authentication strategy (Must be made after the mongoose setup)
passport.use(User.createStrategy());

// Serialize the user data (put data into a cookie) and
// deserialize the user data (Get data out of the cookie)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

// GET: Secrets page
app.get("/secrets", (req, res) => {

    // Check if a user is already logged in or authenticated
    // (This allows the user to navigate to "/secrets" directly without logging in)
    if (req.isAuthenticated()) {
        res.render("secrets");
    }
    else {
        res.redirect("/login");
    }
    
})

// GET: Logout route
app.get("/logout", (req, res) => {

    // Logout the user and redirect him to the home page
    // (Delete the session cookie)
    req.logout();
    res.redirect("/");

})

/*
=====================
POST REQUESTS
=====================
*/

// POST: Register new user
app.post("/register", (req, res) => {

    // Retrieve credentials from the form body using body parser
    let username = req.body.username;
    let password = req.body.password;

    // Register the new user and return the created profile ("user")
    User.register({username: username}, password, (err, user) => {
        if (err) {
            console.log(err);
            res.redirect("/register");
        }
        else {

            // Create a cookie with the login session
            // NOTE: Very strange way to code this
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets");
            });
        }
    });
    
})

// POST: Login page
app.post("/login", (req, res) => {

    // Retrieve the data from the form body using body parser
    let username = req.body.username;
    let password = req.body.password;

    // Create a new user object
    const user = new User({
        username: username, 
        password: password
    });

    // Login the user with passport
    req.login(user, (err) => {

        // Check if the entered user exists in the database
        if (err) console.log(err);
        else {

            // Create a cookie with the login session
            // NOTE: Very strange way to code this
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets");
            });
        }
    })

})


/*
=====================
SERVER LISTENING
=====================
*/

app.listen(3000, () => {
    console.log("Server started on port 3000");
})
// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

// Used to make the example in passport documentation "just work"
const findOrCreate = require("mongoose-findorcreate");

// Use .env files
require("dotenv").config();

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

// Setup the session for passport
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

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
    password: String,
    googleID: String,
    facebookID: String,
    secret: String
});

// Add plugins to current schema
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// Article model
const User = mongoose.model("User", userSchema);

// Setup authentication strategy (Must be made after the mongoose setup)
passport.use(User.createStrategy());

// Serialize the user data (put data into a cookie)
// (Modified to fit all authentication types, not only local auth like with "User.serializeUser()")
passport.serializeUser( (user, done) => {
    done(null, user.id);
});

// Deserialize the user data (Get data out of the cookie)
passport.deserializeUser( (id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

/*
=====================
AUTHENTICATION STRATEGIES
=====================
*/

// Setup Google Auth
//  - Client ID: "username" for google cloud service access (create new credentials before)
//  - Client Secret: "password" for google cloud service access
//  - Callback URL: URL where the browser will redirect after the google auth
//  - userProfileURL: Handle Google+ deprecation
passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/secrets"
    },
    (accessToken, refreshToken, profile, cb) => {

        // Find the existing user or create it (in case it doesnt work)
        User.findOrCreate({ googleID: profile.id }, (err, user) => {
            return cb(err, user);
        });
    }
));

// Setup Facebook Auth
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookID: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

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

// GET: Google auth
// (Here, the callback itself consists of the "passport.authenticate" method)
app.get("/auth/google", 

    // Authenticate with google and retrieve the profile info of the user
    passport.authenticate("google", { scope: ["profile"] })

);

// GET: Secrets access after google login
// (The callback consists of the "passport.authenticate" method)
app.get("/auth/google/secrets",

    // Authenticate the user. Redirect if the login process failed
    // If successful, save the login session
    passport.authenticate("google", { failureRedirect: "/login"}),

    // If auth was successful, redirect to the secrets page
    // (In "/secrets", we once again check if the user has been authenticated)
    (req, res) => {
        res.redirect("/secrets");
    }
);

// GET: Facebook auth
app.get('/auth/facebook',
    passport.authenticate('facebook')
);

// GET: Secrets access after Facebook login
app.get('/auth/facebook/secrets',
    passport.authenticate('facebook', { failureRedirect: '/login' }),

    // Successful authentication, redirect to "secrets"
    (req, res) => {
        res.redirect('/secrets');
    }
);


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
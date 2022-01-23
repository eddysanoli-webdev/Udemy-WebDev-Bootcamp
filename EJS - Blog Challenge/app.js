// ================================
// DEPENDENCIES
// ================================

// NPM Modules
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

// Custom Modules
const date = require(__dirname + '/date');

// ================================
// INITIALIZATION & SETUP
// ================================

// Express pseudonim
const app = express();

// Use body parser
app.use(bodyParser.urlencoded({ extended: true}));

// Set the path for static files
app.use(express.static("public"));

// EJS view engine
app.set("view engine", "ejs");


// Global variables
const posts = [];

// ================================
// CONTENT
// ================================

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis molestie eros, et dictum tellus tempus quis. Nam maximus nulla porta, vestibulum eros a, mattis orci. Proin ligula dui, ultrices et ante in, ultrices pretium leo. Phasellus metus purus, ornare ac ipsum sed, pulvinar eleifend mauris. Nullam posuere lobortis maximus. Duis vitae diam in quam aliquam maximus vitae et felis. Aliquam maximus faucibus urna faucibus finibus.";
const aboutContent = "Praesent imperdiet, mauris rhoncus cursus pharetra, metus orci pharetra lorem, vitae maximus arcu ex quis nibh. Aliquam erat volutpat. Etiam sagittis venenatis ligula, eget sollicitudin neque condimentum sit amet. Aliquam accumsan posuere fermentum. Suspendisse commodo diam id fringilla malesuada. Quisque ut nisi eu tortor rhoncus elementum. Integer vehicula efficitur congue. Duis dictum libero vel rutrum eleifend. Donec vel vulputate nibh, ac accumsan lectus.";
const contactContent = "Duis accumsan odio sed lorem scelerisque, a hendrerit urna luctus. Sed at tincidunt odio, finibus aliquam nisl. Quisque sodales consequat ante sit amet vestibulum. Ut maximus eget libero vel varius. Nullam fringilla euismod felis. Cras tincidunt leo vitae nulla volutpat accumsan. Nullam sapien urna, accumsan quis porttitor commodo, iaculis id elit.";

// ================================
// GET REQUESTS
// ================================

// GET: Home page
app.get(['/', "/home"], (req, res) => {
    res.render("home", {
        initialContent: homeStartingContent, 
        posts: posts, 
        lodash: _ 
    });
})

// GET: About page
app.get('/about', (req, res) => {
    res.render("about", {initialContent: aboutContent});
})

// GET: Contact page
app.get('/contact', (req, res) => {
    res.render("contact", {initialContent: contactContent});
})

// GET: Compose page
app.get('/compose', (req, res) => {
    res.render("compose");
})

// GET: Post page
app.get('/posts/:postName', (req, res) => {

    // Checks each post, and stops if a matching post is found
    // (Due to the "return true" below)
    posts.some( post => {

        // Kebab cases the title of the current post (To lower case and separated by hyphens)
        let postTitle = _.kebabCase([string = post.title]);

        // Kebab case the URL parameter (:postName)
        let urlParam = _.kebabCase([string = req.params.postName]);

        // Check if a selected post was found
        if (postTitle === urlParam){

            // Send the current post info to the "post.ejs" template
            console.log("Match Found!");
            res.render("post", {post: post});
            return true;
        }

        // If this is the last post being checked and no match was found
        if (post === posts.at(-1)) {
            console.log("No Match Found. Returning to main page");
            res.redirect("/");
        }

    })

    
})

// ================================
// POST REQUESTS
// ================================

// POST: Compose page publish button
app.post('/compose', (req, res) => {

    // Extract parameters
    let post = {
        title: req.body.postTitle,
        body: req.body.postContent,
        date: date.getDate()
    }

    // Add post to array
    posts.push(post);

    // Redirect back to main page
    res.redirect("/");
})

// ================================
// ENABLE SERVER
// ================================

app.listen(3000, function() {
    console.log('Server listening on port 3000');
})
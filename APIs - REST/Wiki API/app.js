// Dependencies
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const express = require('express');
const _ = require('lodash');

/*
=====================
SETUP
=====================
*/

// Express pseudonim
const app = express();

// Use body parser
// (Parse requests with UTF-8 encoding and "qs library" [extended = true])
app.use(bodyParser.urlencoded({ extended: true }));

// Setup path for static files
app.use(express.static(`${__dirname}/public`));

// Use EJS for the view engine (use EJS for templating)
app.set('view engine', 'ejs');

/*
=====================
MONGO DB
=====================
*/

// Connect to database (todolistDB)
mongoose.connect("mongodb://localhost:27017/wikiDB", {
    auth: {
        username: 'test',
        password: 'test123'
    },
    authSource: "admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Article schema
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String
});

// Article model
const Article = mongoose.model("Article", articleSchema);

/*
=====================
GET REQUESTS
=====================

Examples:
    - /articles: Fetches all articles
    - /articles/jack-bauer: Fetches the article on jack-bauer

*/

// GET: Fetch all articles
app.get('/articles', (req, res) => {

    // Find all articles in the wiki
    Article.find({}, (err, articles) => {
        if (err) res.send(err);
        else res.json(articles);
    });


});


/*
=====================
POST REQUESTS
=====================

Examples:
    - /articles: Creates one new article

*/


// POST: Creates one new article
app.post('/articles', (req, res) => {

    // Retrieve the data from the request (Add the content on the body)
    const title = req.body.title;
    const content = req.body.content;

    // Create new document with article data
    const newArticle = new Article({
        title: title,
        content: content
    });

    // Save data onto the database
    newArticle.save((err) => {
        if (err) res.send(err);
        else res.send("Successfully added a new article");
    });

})

/*
=====================
DELETE REQUESTS
=====================

Examples:
    - /articles: Deletes ALL articles
    - /articles/jack-bauer: Deletes the article on jack-bauer

*/

// DELETE: Delete all articles
app.delete('/articles', (req, res) => {

    // Delete all the documents inside the database
    // (No conditions are used to select all elements on the database)
    Article.deleteMany({}, (err) => {
        if (err) res.send(err);
        else res.send("Successfully deleted all articles");
    });

}); 

/*
=====================
SPECIFIC ARTICLE ROUTE
=====================
*/

app.route('/articles/:articleTitle')

    // GET: Get a specific article
    .get((req, res) => {

        // Retrieve article title from request
        title = req.params.articleTitle;
        
        Article.findOne(

            // Find matches for the title using three different casings
            //  - First letter in upper case (Title case)
            //  - All letters in upper case
            //  - All letters in lower case
            {title: [
                _.startCase(_.toLower(title)), 
                _.upperCase(title), 
                _.lowerCase(title)
            ]}, 
            
            // Callback if an article was found
            (err, article) => {
                if (err) res.send(err);
                else {
                    if (article) res.send(article);
                    else res.send("No matching article was found"); 
                }
            }
        )

    })

    // PUT: Update a specific article (By replacing the object with a new one)
    .put((req, res) => {

        // Retrieve article title from request
        title = req.params.articleTitle;

        // Retrieve the data from the request (Add the content on the body)
        const newTitle = req.body.title;
        const newContent = req.body.content;

        // Replace the previous content of the article
        Article.findOneAndUpdate(

            // Find matches for the title using three different casings
            //  - First letter in upper case (Title case)
            //  - All letters in upper case
            //  - All letters in lower case
            {title: [
                _.startCase(_.toLower(title)), 
                _.upperCase(title), 
                _.lowerCase(title)
            ]}, 

            // Replacement for the entire old content of the document
            {
                title: newTitle,
                content: newContent
            },

            // Overwrite properties not specified in replacement 
            // (If an object field is not specified, the missing fields will be deleted)
            {overwrite: true},
            
            // Callback
            (err) => {
                if (err) res.send(err);
                else res.send(`Successfully updated article for ${title}`);
            }
        )
    })

    // PATCH: Update a specific article (By replacing a single field)
    .patch((req, res) => {

        // Retrieve article title from request
        title = req.params.articleTitle;

        // Replace the previous content of the article
        Article.findOneAndUpdate(

            // Find matches for the title using three different casings
            //  - First letter in upper case (Title case)
            //  - All letters in upper case
            //  - All letters in lower case
            {title: [
                _.startCase(_.toLower(title)), 
                _.upperCase(title), 
                _.lowerCase(title)
            ]}, 

            // Only set the given fields
            // (Only update the fields given through the body)
            {$set: req.body},
            
            // Callback
            (err) => {
                if (err) res.send(err);
                else res.send(`Successfully updated article for ${title}`);
            }
        )

    })

    // DELETE: Delete a specific article
    .delete((req, res) => {

        // Retrieve article title from request
        title = req.params.articleTitle;

        // Replace the previous content of the article
        Article.findOneAndDelete(

            // Find matches for the title using three different casings
            //  - First letter in upper case (Title case)
            //  - All letters in upper case
            //  - All letters in lower case
            {title: [
                _.startCase(_.toLower(title)), 
                _.upperCase(title), 
                _.lowerCase(title)
            ]}, 
            
            // Callback
            (err) => {
                if (err) res.send(err);
                else res.send(`Successfully deleted article for ${title}`);
            }
        )

    })

/*
=====================
SERVER LISTEN
=====================
*/

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
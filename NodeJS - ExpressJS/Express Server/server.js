// Dependencies
const express = require('express');

// Variable that binds to the express module
const app = express();

/* 
==========================
GET REQUESTS
Browser talks to server and makes a GET request for root
========================== 
*/

// Route: root
app.get("/", (request, response) => {
    response.send("<h1>Hello world</h1>");
});

// Route: contact
app.get("/contact", function(req, res) {
    res.send("Contact me at eddysanoli@gmail.com");
});

// Route: about
app.get("/about", (req, res) => {
    res.send("Hola soy Lali. Me gusta ser Laligno-tigno.");
});


/*
==========================
SERVER
Listen for HTTP requests on port 3000
    - Root of website: localhost:3000
    - If we only include this, a GET error is returned as we are not providing any content to the server)
==========================
*/

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});
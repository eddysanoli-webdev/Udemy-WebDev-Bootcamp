// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

// Express pseudonim
const app = express();

// Get app to use body-parser
app.use(bodyParser.urlencoded({ extended: true}));

// Set the path for static files (CSS and Images)
app.use(express.static(`${__dirname}/public`));

/* 
==========================
GET REQUESTS
========================== 
*/

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/signup.html`); 
});

/* 
==========================
POST REQUESTS
========================== 
*/

// Respond to "Sign Me Up!" button
app.post("/", (req, res) => {

    // Mailchimp API Key: 80576059157b52621ff1626da61682cd-us20
    // List ID: add50c726f  

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    // Mailchimp Data
    // - Email address of the new member
    // - Status of the new member (subscribed)
    // - Merge fields or custom fields (The name "FNAME" comes from here: https://us20.admin.mailchimp.com/lists/settings/merge-tags?id=576632)
    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    // JSON data has to be flattened
    const jsonData = JSON.stringify(data);

    // Mailchimp POST parameters
    // - Original mailchimp endpoint: https://<dc>.api.mailchimp.com/3.0
    // - You have to replace <dc> with the "us-X" at the end of your API key
    // - Any username can be used, and the password consists of the api key
    const url = `https://us20.api.mailchimp.com/3.0/lists/${"add50c726f"}`;
    const options = {
        method: "POST",
        auth: "eddysanoli:80576059157b52621ff1626da61682cd-us20"
    };

    // Create POST request to mailchimp
    const request = 
        https.request(url, options, (response) => {

            // Use "res" to respond to the form request 
            // (Not the http request stored by "response")
            if (response.statusCode === 200) {
                res.sendFile(__dirname + "/success.html");
            } 
            else {
                res.sendFile(__dirname + "/failure.html");
            }

            response.on("data", (data) => {

                // Convert the data 
                console.log(JSON.parse(data));
            });
        });

    

    // Make the POST request
    request.write(jsonData);
    request.end();

});

// Respond to "Try Again" button in failure page
// (Redirect to main page)
app.post("/failure", (req, res) => {
    res.redirect("/");
});


/* 
==========================
SERVER LISTENING
========================== 
*/

// A dynamic port is added for deployment, but
// it can also be run on port 3000 locally.
// (During deployment, an arbitrary port will be chosen automatically)
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});
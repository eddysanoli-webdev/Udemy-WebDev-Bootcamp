// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

// Express pseudonim
const app = express();

// Get app to use body parser
app.use(bodyParser.urlencoded({ extended: true }));

/* 
==========================
GET REQUESTS
========================== 
*/

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});


/* 
==========================
POST REQUESTS
========================== 
*/

app.post("/", (req, res) => {
    
    // Open Weather request
    // Parameters: 
    //  - Region: Guatemala (Capitalized)
    //  - AppID: 235079934b52f97ed68b3b879891d438
    //  - Unit: Metric
    const query = req.body.cityName[0].toUpperCase() + req.body.cityName.slice(1).toLowerCase();
    const apiKey = "235079934b52f97ed68b3b879891d438";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

    // Get request for weather in a specific region (add https://)
    https.get(url, (response) => {

        console.log(response.statusCode);

        // Get response content when data is received
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);

            // Extract data from weather data
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;

            // Get image URL for weather description
            const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            // Send data back to the frontend
            // (We can only use one "send", but multiple "writes", inside GET requests)
            res.write(`<h1>The temperature in ${query} is ${temp} degrees celsius.</h1>`);
            res.write(`<p>The weather is currently: ${description}.</p>`);
            res.write(`<img src="${imgURL}" alt="weather-icon">`);
            res.send();
        });
    });

});



/* 
==========================
SERVER LISTENING
========================== 
*/

app.listen(3000, () => console.log('Server is running on port 3000'));
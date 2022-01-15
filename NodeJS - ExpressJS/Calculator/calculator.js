// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const bmi = require(`${__dirname}/BMI Calculator.js`);

// Express pseudonim
const app = express();

// Body parser setup
// - URL Encoded: For parsing form data
// - Extended: Post nested objects
app.use(bodyParser.urlencoded({ extended: true }));

/* 
==========================
GET REQUESTS
========================== 
*/

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

/* 
==========================
POST REQUESTS
========================== 
*/

// Parse the HTTP request and retrieve the form data
//  - Form data will be a property of "body"
//  - The form data will be parsed as text
app.post('/', (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send(`The result of the sum is ${result}`);
});

// BMI Calculator
app.post("/bmicalculator", (req, res) => {

    // Get form data
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    
    // BMI should equal 20 when it's rounded to the nearest whole number.
    var interpretation = bmi.calculator(weight, height);
    res.send(interpretation);
});

/* 
==========================
SERVER SETUP
========================== 
*/

// Spin up server on port 3000
app.listen(3000, () => {
    console.log("Server started on port 3000.");
});
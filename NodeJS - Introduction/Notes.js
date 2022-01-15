/*
================= 
EXAMPLE 1: INTERNAL NODE MODULE
=================
*/

// Include dependencies
const fs = require('fs');

// Copy content of fil1.txt to file2.txt
// (Take into account the current working directory)
fs.copyFileSync(__dirname + "/file1.txt", __dirname + "/file2.txt");

/*
================= 
EXAMPLE 2: EXTERNAL NODE MODULE
=================
*/

const superheroes = require('superheroes');
const supervillains = require('supervillains');
console.log(superheroes.random());
console.log(supervillains.random());
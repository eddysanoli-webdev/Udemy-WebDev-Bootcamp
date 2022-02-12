const numbers = [1, 2, 3, 4, 5, 6, 7];

// Map
// Applies a function to each element in an array
// Returns a new array with the function applied
const mapNum = numbers.map(number => {
    return number * 2;
})

console.log("Map: ", mapNum);

// Filter
// Create a new array by keeping only the items that return true
// (The function must have a logical or conditional return)
const filterNum = numbers.filter(number => {
    return number % 2 === 0;
})

console.log("Filter: ", filterNum);

// Reduce
// Accumulate a value by doing something to each item in an array
// (Here we add each number to the accumulator)
const reduceNum = numbers.reduce((accumulator, number) => {
    return accumulator + number;
})

console.log("Reduce: ", reduceNum);

// Find (ES6)
// Find the first item that matches a condition from an array
const findNum = numbers.find(number => {
    return number % 2 === 0;
});

console.log("Find: ", findNum);

// Find Index (ES6)
// Find the index of the first item that matches a condition from an array
const findIndexNum = numbers.findIndex(number => {
    return number % 2 === 0;
});

console.log("Find Index: ", findIndexNum);

// Challenge



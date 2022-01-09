// Generate number between 0 and 0.99999999
var n = Math.random();

// Multiply by 6 to extend the range between 0 and 5.9999999
n *= 6;

// Round to get integers
n = Math.round(n);
console.log(`Random number between 0 and 6: ${n}`);
var originalStr = "WHAT are thooose?";

// To lower case
console.log(originalStr.toLowerCase());

// To upper case
console.log(originalStr.toUpperCase());

// Capitalize the first letter of a string
console.log(`Hello, ${originalStr.slice(0, 1).toUpperCase() + originalStr.slice(1).toLowerCase()}`)
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// Array length
console.log(`Array length: ${guestList.length}`);

// First element
console.log(`First element of array: ${guestList[0]}`);

// Check if element is inside
var newGuest = "Bob";
if (guestList.includes(newGuest)) {
    console.log(`Welcome ${newGuest}!`);
}
else {
    console.log(`Better luck next time ${newGuest}.`);
}




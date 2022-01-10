// Declaring an object
var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
};

console.log(houseKeeper1);

// Constructor function (Object factory):
// - Name should be capitalized
// - Inputs: Properties of object
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        console.log("Cleaning in progress.");
    };
}

// Create object
// Always use "new constructor"
var houseKeeper2 = new HouseKeeper(2, "Bob", ["Nice", "Very Nice"]);
console.log(houseKeeper2);

// Call method
houseKeeper2.clean();
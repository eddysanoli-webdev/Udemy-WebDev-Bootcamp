var priceMilk = 1.5;
var totalBudget = 16;

function unitsToBuy(priceMilk, totalBudget) {
    
    // Calculate the amount of cartons of milk that can be bought
    console.log(`You can buy ${Math.floor(totalBudget / priceMilk)} cartons of milk.`);

    // Return the change
    return(totalBudget % priceMilk);

}

var change = unitsToBuy(priceMilk, totalBudget);
console.log(`The change remaining is ${change} dollar(s)`);
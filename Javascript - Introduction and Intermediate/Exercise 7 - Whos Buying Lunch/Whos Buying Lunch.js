function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
    var payer = names[ Math.floor( Math.random() * (names.length) ) ];
        
    return `${payer} is going to boy lunch today!`;
    
    
    /******Don't change the code below*******/    
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(names));
var name1 = "Eddy";
var name2 = "Renata";

var loveScore = Math.random() * 100;
var loveMsg = `The love score between ${name1} and ${name2} is ${Math.round(loveScore)}%.`;

// Difference between "==" and "===":
// - "==": No chequea que los tipos de variable coincidan
// - "===": Chequea que los tipos de variable coincidan
if (loveScore > 70) {
    loveMsg += " You love each other like Kanye loves Kanye.";
}
else if (loveScore <= 70 && loveScore > 30) {
    loveMsg += "";
}
else {
    loveMsg += " You go together like oil and water.";
}

console.log(loveMsg);
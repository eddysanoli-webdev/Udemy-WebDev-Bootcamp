// Random numbers between 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Display the die that corresponds to the random number
//  1. Select the IMG tag with the class "player1-dice"
//  2. Set the "src" attribute
//  3. Change the source to dice "randomNumber"
document.querySelector("img.player1-dice").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector("img.player2-dice").setAttribute("src", `images/dice${randomNumber2}.png`);

// Text for the H1 title text
var titleText;

// Change the H1 text depending on the player that won
if (randomNumber1 > randomNumber2) {
    titleText = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    titleText = "Player 2 Wins!";
}
else {
    titleText = "Draw!";
}

// Winning text
document.querySelector("h1#title").textContent = titleText;
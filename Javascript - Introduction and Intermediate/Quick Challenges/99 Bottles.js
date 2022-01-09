var numBottles = 99;

while (numBottles >= 1) {

    // Variable section of the song
    // (Gramatically correct when only one bottle remains)
    var variableSection = `${numBottles} ${(numBottles == 1) ? "bottle" : "bottles"}`;

    // Song printout
    console.log(`${variableSection} of beer on the wall, ${variableSection} of beer.`);
    console.log(`Take one down and pass it around, ${variableSection} of beer on the wall.`);

    // Decrease the number of bottles
    numBottles--;

}
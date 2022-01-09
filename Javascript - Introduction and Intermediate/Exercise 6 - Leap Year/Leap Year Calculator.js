function isLeap(year) {

    // Output string (Prints: 'Leap year.' or 'Not leap year.')
    var outputStr = "";

    // Year is divisible by 4
    if (year % 4 === 0) {

        // EXCEPT: Year is divisible by 100
        if (year % 100 === 0) {

            // UNLESS: Year is divisible by 400
            if (year % 400 == 0) {

                outputStr = "Leap year.";

            }
            else {
                outputStr = "Not leap year.";
            }

        }
        else {
            outputStr = "Leap year.";
        }

    }
    else {
        outputStr = "Not leap year.";
    }

    return outputStr;

}

var year = 1989;
console.log(`${year}: ${isLeap(year)}`);
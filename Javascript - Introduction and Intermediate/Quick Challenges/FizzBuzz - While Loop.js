// NOTES:
// array.push(1): Inserts "1" at the end of the array
// array.pop(): Removes the last element of an array

function fizzBuzz() {

    var output = [];
    var count = 0;

    while (count <= 100) {

        // Count increment
        count ++;

        // FizzBuzz Logic
        if (count % 3 == 0) {
        
            if (count % 5 == 0){
                output.push("FizzBuzz");
            }
            else {
                output.push("Fizz");
            }
        }
        else {
            if (count % 5 == 0){
                output.push("Buzz");
            }
            else {
                output.push(count);
            }
        } 

    }

    console.log(output);
}

fizzBuzz();
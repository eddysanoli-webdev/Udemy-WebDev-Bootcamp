function fibonacciGenerator(n) {

    var output;

    if (n == 1) {
        output = [0];
    }
    else {
        output = [0, 1];
    }
    
    for (var i = 2; i <= (n-1); i++) {

        output.push(output[i-1] + output[i-2]);

    }

    return output;

}

var fibonacciSequence = fibonacciGenerator(3);

console.log(fibonacciSequence);
console.log(`Fibonacci Length: ${fibonacciSequence.length}`);
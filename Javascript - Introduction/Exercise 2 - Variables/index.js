function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var b_old = b;
b = a;
a = b_old;
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}


// Call the function
test();
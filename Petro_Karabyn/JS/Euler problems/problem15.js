/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
 */

// Just do the math. Fortunately, the Probability and Statics class was not a long time ago. A! / B!(A-B)!

function doingMath() {
    return(factorial(40) / (factorial(20) * factorial(20)));
}

function factorial(n) {
    var factorial = 1;
    for(var i = 1; i < n + 1; i++){
        factorial = factorial * i;
    }
    return factorial;
}

console.log(doingMath());
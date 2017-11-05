/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
 */

function chainSize(number) {
    var size = 0;
    while (number > 1) {
        size++;
        if (number % 2 === 0) {
            number = number / 2;
        }
        else {
            number = (3 * number) + 1;
        }
    }
    return size;
}

function test() {
    var size = 0;
    var number = 0;
    for(var i = 2; i < 1000000; i++) {
        var tempSize = chainSize(i);
        if(tempSize > size) {
            size = tempSize;
            number = i
        }
    }
    return number;
}

console.log(test());
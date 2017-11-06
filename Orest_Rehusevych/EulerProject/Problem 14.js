// Longest Collatz sequence

function longestSequence(under) {
    let counter = 0;
    let maxCounter = 0;
    let bestNumber = 0;
    let number = 0;
    for (i = 2; i < under; i++) {
        number = i;
        while (number !== 1) {
            if (number % 2 === 1) {
                number = 3 * number + 1;
            }
            else if (number % 2 === 0) {
                number = number / 2;
            }
            counter++;
        }
        if (counter > maxCounter) {
            maxCounter = counter;
            bestNumber = i;
        }
        counter = 0;
    }
    return console.log(bestNumber);
}


longestSequence(1000000);
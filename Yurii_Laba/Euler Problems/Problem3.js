function LargestPrimeFactor(number) {
    let tempNum = number;
    let largestFact = 0;

    let counter = 2;
    while (counter * counter <= tempNum) {
        if (tempNum % counter === 0) {
            tempNum = tempNum / counter;
            largestFact = counter;
        } else {
            counter++;
        }
    }
    if (tempNum > largestFact) {
        largestFact = tempNum;
    }
    return largestFact
}

console.log(LargestPrimeFactor(36));
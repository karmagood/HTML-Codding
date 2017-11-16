// The following iterative sequence is defined for the set of positive integers:
//      n → n/2 (n is even)
//      n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
//      13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
// Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

const findFirstNumOfLongestCollatzSequence = (topBoundary) => {
    const findLengthOfSequence = (firstNumber) => {
        if(firstNumber < cacheSize && lengthOfCollatzSequence[firstNumber] != -1){
            return lengthOfCollatzSequence[firstNumber];
        }
        if(firstNumber % 2 == 0)
            lengthOfCollatzSequence[firstNumber] = findLengthOfSequence(firstNumber / 2) + 1;
        else
            lengthOfCollatzSequence[firstNumber] = findLengthOfSequence(3*firstNumber + 1) + 1;

        return lengthOfCollatzSequence[firstNumber];
    }
    let lengthOfCollatzSequence = [-1, 1];
    let cacheSize = 3*topBoundary + 1;
    for(let i=2; i<cacheSize; i++){
        lengthOfCollatzSequence.push(-1);
    }

    let largestCollatzSequenceLength = 1;
    let largestCollatzSequenceFirstNum = 1;

    for (let i = 2; i < topBoundary; i++) {
        if(findLengthOfSequence(i) > largestCollatzSequenceLength) {
            largestCollatzSequenceLength = lengthOfCollatzSequence[i];
            largestCollatzSequenceFirstNum = i;
        }
    }
    return largestCollatzSequenceFirstNum;
};


// Test case
// Answer: 9
console.time('Test');
console.log(findFirstNumOfLongestCollatzSequence(13));
console.timeEnd('Test');

// Task
// Answer: 837799
console.time('Task');
console.log(findFirstNumOfLongestCollatzSequence(1000000));
console.timeEnd('Task');
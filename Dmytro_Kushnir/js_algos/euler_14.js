// The following iterative sequence is defined for the set of positive integers:
//
//     n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
//     13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
//     Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
//     NOTE: Once the chain starts the terms are allowed to go above one million.

const countColatzSequenceLength = (N) => {
    let accum = 0;
    while (N!==1){
        accum++;
        if (N % 2 === 0){
            N = N/2;
        }
        else{
            N = 3*N + 1;
        }
    }
    return accum;
};

const findLongestColazSeqUpon = (upperLimit) =>{
    let longestColatz = 0;
    let colatzLength = 0;
    let longestColazInit = 0;
    for (let i = 1; i <= upperLimit; i++){
        colatzLength = countColatzSequenceLength(i);
        if (colatzLength > longestColatz ){
            longestColatz = colatzLength;
            longestColazInit = i;
        }
    }
    return longestColazInit;
};


console.log(findLongestColazSeqUpon(1000000));
function SumSquareDifference(number) {
    let sumOfSquares = 0;
    let squaresOfSum = 0;
    for(let i = 1; i<=number; i++){
        sumOfSquares += i*i;
        squaresOfSum += i;
    }
    return squaresOfSum*squaresOfSum - sumOfSquares

}

console.log(SumSquareDifference(100));
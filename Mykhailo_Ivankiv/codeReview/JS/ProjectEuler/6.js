



const findSum = (n) =>{
    var sumOfSquares = 0;
    var squareOfSum = 0;
    for (let i = 1; i <= n; ++i){
        sumOfSquares += i * i;
        squareOfSum += i;
    }

    return squareOfSum * squareOfSum - sumOfSquares;
}

console.log(findSum(100));

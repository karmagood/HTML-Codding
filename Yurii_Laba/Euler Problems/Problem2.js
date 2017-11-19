/**
 * @return {number}
 */
function EvenFibonacciNumbers() {
    let tempFirstNumber = 0;
    let tempSecondNumber = 1;
    let newNumber = 0;
    let sum = 0;
    while(newNumber < 4000000){
        newNumber = tempFirstNumber + tempSecondNumber;
        tempFirstNumber = tempSecondNumber;
        tempSecondNumber = newNumber;
        if(newNumber % 2 ===0){
            sum+=newNumber;
        }
    }
    return sum;
}

console.log(EvenFibonacciNumbers());
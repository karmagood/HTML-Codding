function checkDivisible(value) {
    for(let i = 1; i<=20; i++){
        if (value % i !== 0){
                return false;
        }
    }
    return true;
}

function SmallestMultiple() {
    let tmpValue = 2520;
    while(!checkDivisible(tmpValue)){
        tmpValue++;
    }
    return tmpValue
}

console.log(SmallestMultiple());
function Problem12() {
    let index = 10000;
    while (true){
        let TriangleNumber = GetTriangleNumber(index);
        if(GetAllDivisors(TriangleNumber).length - 1 >= 500){
            return TriangleNumber;
        }
        ++index;
    }
}

function GetAllDivisors(num) {
    let arr = [];
    for(let i = 1; i < num + 1; ++i){
        if(num % i === 0){
            arr.push(i);
        }
    }
    return arr;
}
function GetTriangleNumber(num) {
    let sum = 0;
    for(let i = 1 ; i < num + 1; ++i){
        sum += i;
    }
    return sum;

}

console.log(Problem12());
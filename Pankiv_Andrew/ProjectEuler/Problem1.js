function Problem1(number) {
    let arr = [];
    let sum = 0;
    for (let i = 2; i < number; ++i){
        if (i % 3 === 0 || i % 5 === 0){
            arr.push(i)
        }
    }
    for (let i = 0; i < arr.length; ++i){
        sum += arr[i];
    }
    return sum;
}

let result = Problem1(1000);
console.log(result);
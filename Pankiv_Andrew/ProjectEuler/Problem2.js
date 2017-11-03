function Problem2(max) {
    let arr = [1,2];
    let index = 0;
    let num = 0;
    let sum = 0;
    while (true){
        num = arr[index] + arr[index + 1];
        if (num > max){
            break;
        }
        arr.push(num);
        ++index;
    }
    for (let i = 0; i < arr.length; ++i){
        if (arr[i] % 2 === 0){
            sum += arr[i]
        }
    }
    return sum;
}

console.log(Problem2(4000000));
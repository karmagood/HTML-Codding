//#1
var sum = 0;

for (let i = 1 ; i < 1000 ; i++ ) {
    if(i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log("Solution for problem #1:", sum);

//#2
var fibonacci = [0, 1];
var i = 0;
var sum1 = 0;
while (fibonacci[0] + fibonacci[1] < 4000000){
    i = fibonacci[0] + fibonacci[1];
    fibonacci[0] = fibonacci[1];
    fibonacci[1] = i;

    if(i % 2 === 0){
        sum1 += i;
    }
}
console.log("Solution for problem #2:", sum1);

// #4
var largest = 0;

for(let  k = 100; k < 999; k++){
    for(let j = 100; j < 999; j++){
        var num = k * j;
        var num1 = '' + num;
        if (num1 === num1.split("").reverse().join("") && num > largest){
            largest = num;
        }
    }
}

console.log("Solution for problem #4:", largest);

//#6
var sum = 0;
var sum1 = 0;

for(let i = 1; i <= 100; i++){
    sum += i * i;
}

for(let j = 1; j <= 100; j++){
    sum1 += j;
    var tot_sum = sum1 * sum1
}

console.log("Solution for problem #6:", tot_sum - sum)

//#7
arr = [];

function isPrime(num) {
    for(let j = 2; j < num; j++) {
        if(num % j === 0) {
            return false;
        }
    }
    return num > 1;
}

for (let i = 2; i < 150000; i++) {
    if (isPrime(i)) {
        arr.push(i);
    }
}

var value_at_index = arr[10000];
console.log("Solution for problem #7:", value_at_index)

//#9
for(let a = 1; a < 1000; a++){
    for (let b = a, lb = 1000 - a; b < lb; b++){
        const c = 1000 - (a + b)
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
            return console.log("Solution for problem #9:", a * b * c)
        }
    }
}



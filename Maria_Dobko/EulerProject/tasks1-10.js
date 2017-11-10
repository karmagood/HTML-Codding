let math = require('mathjs');

function add(a, b) {
    return a + b;
}

//Problem 1
const getMultiples = (int) => {
    let arr = [];
    for(let i = 1; i<int; i+=1){
        if((i % 5 === 0 )|| (i%3===0)){
            arr.push(i);
        }
    }
    return arr.reduce(add, 0);
};

//console.log(getMultiples(1000));

// -----------------------------------------------------------------------------------------------------
//Problem 2

const getFibonnacci = (limit) =>{
    let fibNum = [0, 1];
    let sum = 0;
    let i=0;
    while (fibNum[0]+fibNum[1]< limit){
        i = fibNum[0] + fibNum[1];
        fibNum[0] = fibNum[1];
        fibNum[1] = i;

        if(i%2 ===0){
            sum += i;
        }
    }
    return sum;
};

//console.log(getFibonnacci(4000000));
// -----------------------------------------------------------------------------------------------------
//Problem 3

const getLargestPrimeFactor = (integer) => {
    let primeArray = [];
    let isPrime;

    for(i = 1; i <= integer; i++){
        if (integer % i===0) {
            //check for prime
            for(let j = 2; j <= i/2; j++) {
                if(i % j === 0) {
                    isPrime = false;
                } else {
                    isPrime = true;
                }
            }
            if (isPrime === true) {
                integer /= i;
                primeArray.push(i);
            }
        }
    }
    return math.max(primeArray);
};

//console.log(getLargestPrimeFactor(600851475143));
// -----------------------------------------------------------------------------------------------------
//Problem 4

function checkPalindrome (mult) {
    let str = mult.toString();
    return str === str.split('').reverse().join('');
}

const getLargestPalindrome3digits = () => {
    let arr = [];
    for (let i=100; i<1000; i+=1){
        for (let j=100; j<1000; j+=1){
            let mult = i*j;
            let isPal = checkPalindrome(mult);
            /*console.log(isPal);*/
            if(isPal){
                arr.push(mult);
            }
        }
    }
    return math.max(arr);
};

//console.log(getLargestPalindrome3digits());
// -----------------------------------------------------------------------------------------------------
//Problem 5

const getSmallestMultiple = (a,b) =>{
    for(let i = 20; i <= 100000000000; i++){
        let found = true;
        for(let divis = a; divis <= b; divis++){
            if (i % divis !== 0) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }
};
//console.log(getSmallestMultiple(1, 10));
//console.log(getSmallestMultiple(1, 20));

// -----------------------------------------------------------------------------------------------------
// Problem 6

function differenceSumSquare (numbers) {
    sum_squares = 0;
    sum = 0;
    for (let num=1; num<=numbers; num+=1) {
        sum_squares += math.pow(num,2);
        sum += num;
    }
    return math.pow(sum,2)- sum_squares;

}

//console.log(differenceSumSquare(100));
// -----------------------------------------------------------------------------------------------------
// Problem 7

const getPrime  = num => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num !== 1;
};

const getPrimeByIndex = (index) => {
    let primeArray = [];
    let isPrime;
    let num=1;
    while(primeArray.length !== index){
        if(getPrime(num)===true) {
            primeArray.push(num);
        }
        num+=1;
    }

    return math.max(primeArray);
};

//console.log(getPrimeByIndex(10001));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// Problem 9

const pythagorianTriplet = (num) =>{
  let sum = num;
  //console.log(Math.sqrt(num));    sqrt doesn't work
  for (let a=1; a<sum/3; a++){
      for(let b=1; b<sum/2; b++){
          let c = sum -a-b ;
          if((math.pow(a, 2)+math.pow(b, 2))=== math.pow(c, 2)){
              console.log(a,b,c);
              return a*b*c
          }
      }
  }
};

//console.log(pythagorianTriplet(1000));

// -----------------------------------------------------------------------------------------------------
//Problem 10

const sumPrimes = (number) =>{
    let sum = 0;
    for(let i = 2; i <= number; i++) {
        if(getPrime(i)===true){
            sum+=i;
        }
    }
    return sum;
};
//console.log(sumPrimes(2000000));

// -----------------------------------------------------------------------------------------------------


//problem 1

var res1=0;
for(var i=1; i< 1000; i++){
    if(i%3 ===0 || i%5 === 0){
        res1 += i;
    }
}
console.log("problem 1 answer: ",res1);

//-----------------------------

//problem 2


var fibarr = [1,1];
var res2 = 0;
var i = 1;
var last = 0;
while(last < 4000000){
    last = fibarr[i-1] + fibarr[i];
    if(last < 4000000) {
        fibarr.push(last);
        if(last%2 ===0) {
            res2 += last;
        }
        i++;

    }else{
        break;
    }
}
console.log("problem 2 answer: ",res2);


//-------------------------------------

//problem3
// too stupid to do this problem....


// todo


console.log("problem 3 answer: ",res3);


//--------------------------------------

//problem 4
function ispalindromic(x) {
    var reversenum = parseInt(x.toString().split('').reverse().join(''));
    if (reversenum === x)
        return true;
    else
        return false;
}
var num1, num2, prod, maxprod = 0;

for (num1 = 100; num1 <= 999; num1++) {
    for (num2 = num1; num2 <= 999; num2++) {
        prod = num1 * num2;
        if (ispalindromic(prod)) {
            if( maxprod < prod ) { // this is new
                maxprod = prod;
                res4 = num1 + '*' + num2 + '=' + maxprod;
            }
        }
    }
}
console.log(res4);


//-------------------------


//problem 5

var arr = [];
for(var i =1; i<=20;i++){ //generating array of 20 digits
    arr.push(i);
}
var flag = false;
var i = 232782560;// omg started from 2520  but code run for 10 min...
while(!flag){
    flag = true;
    for(var y = 0;y<arr.length;y++){
        //console.log(arr[y]);
        if(i%arr[y] !== 0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(i);
        break;
    }
    i +=20 ;
}



// problem 6
var sum1 = 0;
var sum2 = 0;

for(var i = 1;i<=100;i++){
    sum1+= Math.pow(i,2)
    sum2 += i;
}
sum2 = Math.pow(sum2,2);
console.log(sum2 - sum1);


//problem7
function isPrime(num){
    if(num > 1){
        for(var i = 2; i<num;i++){
            if(num%i ===0){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

var nth = 0;
var i = 0;
while(nth !== 10001){
    ///console.log('i: ',i);
    if (isPrime(i)){
        console.log('nth: ',nth,'  - ',i);
        nth += 1;
    }
    i++;
}
console.log(i -1 );


//problem9
function probleb9() {
    var a = 1;
    var b = a + 1;
    var c;

    while (a < 1000) {
        while (b < 1000 && b > a) {
            c = 1000 - a - b;
            if (c < b) {
                break;
            }
            if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
                return a * b * c;
            }
            b++;
        }
        a++;
        b = a + 1;
    }
}
res = probleb9();
console.log(res);



//problem 10

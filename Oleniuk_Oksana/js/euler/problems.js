const  first = () =>{
    return getSum(generateNaturalNumber(1000, [3,5]));
}

//dividers has type list
const generateNaturalNumber = (max,dividers) => {
    var array_1 = [];

    for (var j = 0; j < dividers.length; j++){
        for (var i = 1; i <= max -1 ; i++){
            if(((i % dividers[j]) == 0) && ((array_1.indexOf(i) == -1))){

                array_1.push(i)
            }
        }}
    return array_1;

};
// console.log(generateNaturaNumber(10, [3, 5]));
const getSum = (arr) => {
    console.log(arr)
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        console.log(i);
        sum = sum + arr[i];
    }
    return sum;
};
const GenerateFibonacciNumber=(max)=>{
    var first = 1;
    var second = 1;
    var valueF = 0;
    var  arr = [];
    while (valueF < max) {
        valueF = first + second;
        if (valueF % 2 == 0){
            arr.push(valueF);}
        first = second;
        second = valueF;
    }
    return arr;
};
const  second = () =>{
    return getSum(GenerateFibonacciNumber(4000000));
}
// console.log(second());







const binarySearch = function(arr, x){
    'use strict';
    var lowerBound = 0;
    var upperBound = arr.length - 1;
    var center = (lowerBound + upperBound) / 2 >> 1;  //bit shift right
    while (x != arr[center] && lowerBound<=upperBound){  //while x is not the center of arr and...
        if (x < arr[center]) {  //if x is less than center,  shift the upper bound of search
            upperBound = center - 1;
        } else if (x > arr[center]) {  //if x is bigger than arr[center]
            lowerBound = center + 1;
        }

        center = (lowerBound + upperBound) >> 1;
    }
    if (arr[center] == x) {
        return center;
    } else {
        return "x was not found in array arr";
    }
};

//works out correctly for sorted arrays only
console.log(binarySearch([2,3,4,5,6,8,25],6));
console.log(binarySearch([2,3,4,5,6,8,25],3));
console.log(binarySearch([2,3,4,5,6,8,25],23));
console.log(binarySearch([2,3,4,5,6,8,25],2));
console.log(binarySearch([2,3,4,5,6,12,25],4));
console.log(binarySearch([2,3,4,5,6,8,25,32],25));
console.log(binarySearch([0,0,0,0,0,1],1)); // ?))

//another variant of realisation
/*const binarySearchIndexOf = function(arr, x, lowerBound, upperBound) {  //x is the key whose center we're searching for
    'use strict';  // [1, 2, 3, 4, 5, 6, 7],2,0,6) (answer is 1)

   while(lowerBound <= upperBound && arr.length > 0) {
       var middleValue = (upperBound+lowerBound) >> 1;  //3

       var leftArr = arr.slice(0,middleValue);  //0 to 3, so in fact ind 0,ind 1 and ind 2
       var rightArr = arr.slice(middleValue, arr.length);  //[3-7) == ind-s 3, 4,  5, 6

       // checking if middle value is our key x
       if(x === arr[middleValue]){return middleValue}  //returns arr[2] if it equals x
       else if (x < arr[middleValue]) {  //if x is less than arr[middleValue] value,..
           middleValue = upperBound;
           console.log(middleValue);
          // console.log(binarySearchIndexOf([1,5,4,7, 1.2,9,3.1],1.2,0,6));  //4 (error instead btw:( )
           return binarySearchIndexOf(leftArr, x, lowerBound, middleValue)
       }
       else {
            lowerBound = middleValue;
            console.log(middleValue)
            return binarySearchIndexOf(rightArr,x, lowerBound, upperBound);
       }
   }

    return "x was not found in this array";
};

console.log(binarySearchIndexOf([1, 2, 3, 4, 5, 6, 7],2,0,6));  //4

*/

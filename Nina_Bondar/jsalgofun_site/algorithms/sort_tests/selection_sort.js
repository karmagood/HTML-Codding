/*
* selection sort works like this:
* 1: assign the minVal=arr[0]
* 2: iter the arr until find value less than current min
* 3: now min = new min, swap them
*
* make a */


function selectionSort(arr)  {
    const len = arr.length;
    for (var i=0; i < len; i++){  //iterations
        var min = i;
        //checking the rest of the elements to find anything smaller
        for (ind=i+1; ind < len; ind++){
            if (arr[min] > arr[ind]) {
                min = ind;
            }
        }
        //if minimum isn't on it's position, swap it
        if (i != min) {
            swap(arr, i, min);
        }
    }
    return arr;
}

function swap(arr, firstIndex, secondIndex){
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}
/*
swap = function (arr, val1, val2) {
    var ind2 = arr.indexOf(val2);   //index of the second value
    arr[arr.indexOf(val1)] = val2;
    arr[ind2] = val1;
};
*/
console.log(selectionSort([2,4,1,7,5,8,3]));
console.log(selectionSort([99,0.2,1,7,0,3]));
console.log(selectionSort([2,34,1,7,25,-3,3]));
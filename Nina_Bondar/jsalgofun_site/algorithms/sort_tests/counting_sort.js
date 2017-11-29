'use strict';
function countingSort(arr, min, max)  //el-s of the list
    {
    var i, z = 0;
    var counted = [];

    for (i = min; i <= max; i++) {
        counted[i] = 0;
    }

    for (i=0; i < arr.length; i++) {
        counted[arr[i]]++;
    }

    for (i = min; i <= max; i++) {
        while (counted[i]-- > 0) {
            arr[z++] = i;
        }
    }
    return arr;
}



console.log(countingSort([3, 0, 6, 5, 4, 1], 0, 6));

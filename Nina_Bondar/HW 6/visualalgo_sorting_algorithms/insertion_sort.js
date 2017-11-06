function insertionSort(arr) {
    const len = arr.length;
    for (var i = 1; i < len; i++) {
        var tmp = arr[i]; //a copy of the current el of arr
        for (var j = i - 1; j>=0 && (arr[j]>tmp); j--) {  //checking through the already sorted part
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = tmp;   //inserting the copied elem  correctly
    }
    return arr;
}

var ul = [5, 3, 1, 2, 4];
var u3 = [7,90, 39, 8, 2.7, -24];
console.log(insertionSort(ul));
console.log(insertionSort(u3));
array = [5, 2, 4, 9, 1, 7, 3, 8, 10, 6];

function insertionSort(array) {
    var n = array.length;
    for(var i = 1; i < n; i++) {
        for(var j = i; j > 0 && array[j] < array[j-1]; j--) {
           var temp = array[j];
           array[j] = array[j-1];
           array[j-1] = temp;
        }
    }
    return array;
}

insertionSort(array);
console.log(array);
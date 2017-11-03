array = [5, 2, 4, 9, 1, 7, 3, 8, 10, 6];

function selectionSort(array) {
    var n = array.length;
    for(var i = 0; i < n; i++) {
        var minIndex = i;
        for(var j = i + 1; j < n; j++) { // find minimum in the unsorted part of the array
            if(array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        var temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}

selectionSort(array);
console.log(array);
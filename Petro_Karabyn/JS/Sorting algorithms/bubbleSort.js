array = [5, 2, 4, 9, 1, 7, 3, 8, 10, 6];

function bubbleSort(array) {
    var sorted = false;
    do {
        sorted = true;
        for (var i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
            }
        }
    } while(!sorted);
    return array;
}

bubbleSort(array);
console.log(array);
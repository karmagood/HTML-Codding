var comparisons = 0;

const swap = function (arr, firstIndex, secondIndex){
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
};

const selectionSort = function (arr)  {
    const len = arr.length;

    for (let i = 0; i < len; i++){
        var minItem = i;

        for (let currentIndex = i+1; currentIndex < len; currentIndex++){
            comparisons++;
            if (arr[minItem] > arr[currentIndex]) {
                minItem = currentIndex;
            }
        }

        if (i !== minItem) { // if we have a new minimal value
            swap(arr, i, minItem); // move it to the beginning of the array
         }
    }
    return comparisons;
};

module.exports = selectionSort;
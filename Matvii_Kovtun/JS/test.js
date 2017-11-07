const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min


const getRandomArray = (size) => {
    let array = [];

    for (let i = 0; i < size; ++i) {
        array.push(getRandomNumber(0, 50));
    }
    return array;
}


const swap = (arr, i, j) => {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;

}


const bubbleSort = (arr) => {
    var sorted_array = arr.slice();
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < sorted_array.length; ++i) {
            if (i < sorted_array.length - 1){
                var first = sorted_array[i];
                var second = sorted_array[i + 1];
                if (first > second){
                    swapped = true;
                    sorted_array = swap(arr, i, i + 1);

                }
            }
        }
    }
    return sorted_array;


}


var q = getRandomArray(5);
console.log(q);

var res = bubbleSort(q);
console.log(res);
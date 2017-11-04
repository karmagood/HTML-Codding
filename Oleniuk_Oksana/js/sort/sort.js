// function getRandomnumber(){
// const getRandomnumber = () =>{
// let - змінні з локальним скоупом
const getRandomNumber = (min, max) => Match.floor(Match.random() + (max - min + 1)) + min

const getRandomArray = (size) => {
    var arr = [];

    for(var i  = 0; i < size; i += 1){
        arr.push(Math.round(Math.random() * 100))
    }
    return arr;
};
const swap = (arr, a, b) =>{
    var c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
    return arr;
}
const bubbleSort = (arr) =>{
    //clone array
    const sorted = arr.slice();
    // console.log(sorted.length);
    for(var i= (sorted.length - 1); i >= 0; i--){
        for(var j = (sorted.length - i); j > 0; j--){
            if(sorted[j] < sorted[j - 1]){
                swap(sorted, j , j - 1);
            }
        }
    }
    return sorted;
};

// console.log(bubbleSort(getRandomArray(10)));

const selectionSort= (arr) =>{
    var n = arr.length;
    //clone array
    const sorted = arr.slice();
    for(var j = 0; j < n-1; j++){
        var minIndex = j;
        for (var i = j + 1; i < n;i++){
            if(sorted[i] < sorted[minIndex]){
                minIndex = i
            }
        }
        if(minIndex != j){
            swap(sorted, j, minIndex)
        }
    }
    return sorted;
};

// console.log(selectionSort(getRandomArray(10)))
const merge = (left, right) =>{
    console.log()
    var result = [];
    while((left.length != 0) && (right.length != 0)){
        if (left[0] <= right[0]){
            result.push(left[0]);
            left = left.slice(1);
        }
        else{
            result.push(right[0]);
            right = right.slice(1);
        }

    }
    while (left.length != 0){
        result.push(left[0]);
        left = left.slice(1);

    }
    while (right.length != 0){
        result.push(right[0]);
        right = left.slice(1);
    }
    return result;
}

const mergeSort = (arr) =>{
    var n = arr.length;

    if (n <= 1){
        return arr;
    }
    var left = [];
    var right = [];
    for (var i = 0; i <= n-1; i++){
        if (i < n/2){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
}

// console.log(mergeSort(getRandomArray(10)))
const insertionSort = (arr) => {
    var n = arr.length;
    for (var i = 0; i < (n - 1); i++){
        var tmp = arr[i];
        for(var j = i - 1; j >= 0 && (arr[j] > tmp); j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = tmp;
    }
    return arr;

}
// console.log(insertionSort(getRandomArray(10)))
// const swap = (item, firstIndex, secondIndex) =>{
//     const temp = item[firstIndex];
//     item[firstIndex] = item[secondIndex];
//     item[secondIndex] = temp;
//     return item;
// }
const partition = (arr, l_0, hi) =>{
    var pivot = arr[hi];
    var i = l_0 -1;
    for (var j = l_0; j <= hi -1; j++){
        if( arr[j] < pivot){
            i = i +1;
            swap(arr, i, j);
        }
    }
    if (arr[hi] < arr[i + 1]){
        swap(arr, i + 1, hi);
    }
    return i +1;
}
const quickSort = (arr, l_0, hi) =>{
    if (l_0 < hi){
        var p = partition(arr, l_0, hi);
        quickSort(arr, l_0, p-1);
        quickSort(arr, p+1, hi);

    }
    return arr;
}
// console.log(quickSort(getRandomArray(10), 0 , 9))


// function returns random int from the [min;max)
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
// console.log(getRandomInt(1, 10))

const RandomizedPartition = (arr, p, r) => {
    var i = getRandomInt(p, r);
    swap(arr, r, i);
    return partition(arr, p, r);
}

const RandomizedQuickSort = (arr, p, r) =>{
    if(p < r){
        q = RandomizedPartition(arr, p, r);
        RandomizedQuickSort(arr, p, q - 1);
        RandomizedQuickSort(arr, q + 1, r);
    }
    return arr;
}
// console.log(RandomizedQuickSort(getRandomArray(10), 0 , 9))
const key = (arr, item) =>{
    console.log(item)
    console.log("Item: ", item, "Index:", arr.toString().indexOf(item))
    return arr.toString().indexOf(item);
}

// const countingSort = (arr) =>{}
// const radixSort = (arr) =>{}
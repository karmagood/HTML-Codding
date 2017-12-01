function quickSort(arr, left, right) {
    var ind;

    if (arr.length > 1) {
        ind = partition(arr, left, right);

        if (left < ind - 1) {
            quickSort(arr, left, ind - 1);
        }

        if (ind < right) {
            quickSort(arr, ind, right);
        }
    }
    return arr;
}

function partition(items, left, right) {

    var pivot = items[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;

    while (i <= j) {

        while (items[i] < pivot) {
            i+=1;
        }

        while (items[j] > pivot) {
            j-=1;
        }
        //reached pivot value
        if (i <= j) {
            swap(items, i, j);
            i+=1;
            j-=1;
        }
    }

    return i;
}

function swap(arr, firstInd, secondInd){
    var temp = arr[firstInd];
    arr[firstInd] = arr[secondInd];
    arr[secondInd] = temp;
}


//now working properly
console.log(quickSort([2,1,4,0,-4,-9],0,5));
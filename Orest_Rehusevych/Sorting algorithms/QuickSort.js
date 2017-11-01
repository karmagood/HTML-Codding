var list_of_numbers = [5, 14, 21, -2, 67, 1, -15, 0];

function quickSort(list, left, right) {
    if (left < right) {
        var pivot = right;
        var partitionIndex = partition(list, pivot, left, right);
        quickSort(list, left, partitionIndex - 1);
        quickSort(list, partitionIndex + 1, right);
    }
    return list;
}

function partition(list, pivot, left, right) {
    var pivotValue = list[pivot],
        partitionIndex = left;
    for (var i = left; i < right; i++) {
        if (list[i] < pivotValue) {
            swap(list, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(list, right, partitionIndex);
    return partitionIndex;
}

function swap(list, i, k) {
    var tempVar = list[i];
    list[i] = list[k];
    list[k] = tempVar;
}

var quickSortresult = quickSort(list_of_numbers, 0, list_of_numbers.length - 1);
console.log(quickSortresult);
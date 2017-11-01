var list_of_numbers = [5, 14, 21, -2, 67, 1, -15, 0];

function mergeSort(list) {
    if (list.length < 2) {
        return list;
    }
    var middle = Math.floor(list.length / 2),
        left = list.slice(0, middle),
        right = list.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var resultList = [],
        l = 0,
        r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            resultList.push(left[l++]);
        }
        else {
            resultList.push(right[r++]);
        }
    }
    return resultList.concat(left.slice(l)).concat(right.slice(r));
}

var mergeSortresult = mergeSort(list_of_numbers);
console.log(mergeSortresult);
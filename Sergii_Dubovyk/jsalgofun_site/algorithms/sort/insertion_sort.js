var comparisons = 0;

var sort = function insertionSort(arr) {
    const len = arr.length;
    for (var i = 1; i < len; i++) {
        var tmp = arr[i];
        for (var j = i - 1; j>=0 && (arr[j]>tmp); j--) {
            comparisons++;
            arr[j + 1] = arr[j];
        }
        comparisons++;
        arr[j + 1] = tmp;
    }
    return comparisons;
};

module.exports = sort;
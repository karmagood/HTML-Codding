var comparisons = 0;

const countingSort = function (arr, min, max) {
    var i, z = 0;
    var processed = [];

    for (i = min; i <= max; i++) {
        processed[i] = 0;
    }

    for (i=0; i < arr.length; i++) {
        processed[arr[i]]++;
    }

    for (i = min; i <= max; i++) {
        while (processed[i]-- > 0) {
            arr[z++] = i;
        }
    }

    return arr;
};

module.exports = countingSort;
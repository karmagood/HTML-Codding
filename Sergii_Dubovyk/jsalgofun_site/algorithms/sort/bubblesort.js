var comparisons = 0;

var sort = function (array) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < array.length-1; i++) {
            comparisons++;
            if (array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return comparisons;
};

module.exports = sort;
var comparisons = 0;

const merge = function (left, right) {
    var left_ind = 0;
    var right_ind = 0;
    var res = [];

    while (left_ind < left.length && right_ind < right.length) {
        comparisons++;
        if (left[left_ind] < right[right_ind]){
            res.push(left[left_ind]);
            left_ind+=1;
        }
        // if left is bigger -> push right el in the res
        else {
            res.push(right[right_ind]);
            right_ind+=1;
        }
    }
    res = res.concat(left.slice(left_ind)).concat(right.slice(right_ind));
    return res;
};

const mergeSort = function (arr) {
    if (arr.length === 1) {
        return comparisons
    }
    // static method Math.floor to get the middle item of the arr rounded
    const middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);  //left side of arr
    var right = arr.slice(middle);  //right side

    return merge(mergeSort(left), mergeSort(right));
};

module.exports = mergeSort;

function binarySearch(array, target) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    while(min <= max) {
       guess = Math.floor((min + max) / 2);
        if (array[guess] < target) min = guess + 1;
        else if(array[guess] > target) max = guess - 1;
        else return guess;
    }
    return -1;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(array, 8));

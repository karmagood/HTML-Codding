
// function that generates random arrays of n int elements
function getrandomarr(len) {
    var randarr = [];
    for(var i=0; i<len; i++){
        randarr.push(Math.floor((Math.random() * 50) + 1))  //ints from 1 - 10
    }
    return randarr;
};

arr = getrandomarr(30);
document.getElementById("arr1").innerHTML = arr;





function merge_sort(arr)
{
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var l1   = arr.slice(0, middle);
    var l2  = arr.slice(middle, arr.length);

    return merge(merge_sort(l1), merge_sort(l2));
}

function merge(l1, l2)
{
    var c = [];

    while (l1.length && l2.length) {
        if (l1[0] <= l2[0]) {
            c.push(l1.shift()); // shift() - deletes element with index 0
        } else {
            c.push(l2.shift());
        }
    }

    while (l1.length)
        c.push(l1.shift());

    while (l2.length)
        c.push(l2.shift());

    return c;
}
//pseudo code taken from http://www.algorithmist.com/index.php/Merge_sort


var start_time = performance.now();
var sarr = merge_sort(arr);
var finish_time = performance.now();
var execution_time = finish_time - start_time;
document.getElementById("time_spent").innerHTML = execution_time;
document.getElementById("arr2").innerHTML = sarr;


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



// function that sorts array using insertion sort
function insertion_sort(arr) {
    var start_time = performance.now();
    sorted = arr;

    for(var i = 1;i<sorted.length;i++){
        for(var y = 0; y<i; y++){
            if(sorted[i] < sorted[y]){
                temp = sorted[y];
                sorted[y] = arr[i];
                arr[i] = temp;
            }
        }
    }
    var finish_time = performance.now();
    var execution_time = finish_time - start_time;
    document.getElementById("time_spent").innerHTML = execution_time;
    return sorted;
}

var sarr = insertion_sort(arr);
document.getElementById("arr2").innerHTML = sarr;

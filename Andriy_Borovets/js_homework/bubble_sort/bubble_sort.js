
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



// function that sorts array using bubble sort
function bubblesort(arr) {
    var start_time = performance.now();
    sorted = arr;
    swapped = true;
    while(swapped){
        swapped = false;
        for(i=0; i < sorted.length; i++){
            if(sorted[i]>sorted[i+1]){
                var temp = sorted[i];
                sorted[i] = sorted[i+1];
                sorted[i+1] = temp;
                swapped = true;
            }
        }
    }
    var finish_time = performance.now();
    var execution_time = finish_time - start_time;
    document.getElementById("time_spent").innerHTML = execution_time;
    return sorted
}

var sarr = bubblesort(arr);
document.getElementById("arr2").innerHTML = sarr;

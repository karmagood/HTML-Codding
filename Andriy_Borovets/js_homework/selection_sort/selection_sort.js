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


function selection_sort(arr) {
    var start_time = performance.now();
    sorted = arr;
    for(i = 0;i<sorted.length;i++){
        min = sorted[i];
        index = i;
        for(y = i + 1; y<sorted.length;y++){
            if(min > sorted[y]){
                min = sorted[y];
                index = y;
            }
        }
        if(index === i){
            continue;
        }
        else{
            temp = sorted[i];
            sorted[i] = sorted[index];
            sorted[index] = temp;
        }
    }
    var finish_time = performance.now();
    var execution_time = finish_time - start_time;
    document.getElementById("time_spent").innerHTML = execution_time;
    return sorted;
}

var sarr = selection_sort(arr);
document.getElementById("arr2").innerHTML = sarr;


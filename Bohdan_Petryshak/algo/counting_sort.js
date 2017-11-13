
function CountingSort(arr){
    return arr.reduce( (acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), [] )
        .reduce( (acc, n, i) => acc.concat(Array(n).fill(i)), [] );
}

let arr = [5,4,3,2,1,0];
console.log(CountingSort(arr));


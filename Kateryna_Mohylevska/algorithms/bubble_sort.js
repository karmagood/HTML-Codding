const getRandomNumber = (min,max) => Math.floor(Math.random()*(max-min))+min

const getRandomArray = (size) =>{
    let arr = [];
    for(let i =0;i<size;i++){
        arr.push(getRandomNumber(0,50));
    }
    return arr;
}

const swap = (arr,a,b) =>{
    let c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
    return arr;
}

const bubbleSort = (arr) =>{
    const sorted = arr.slice();
    for(let i=0; i<sorted.length-1; i++){
        for(let j=0; j<sorted.length-i-1; j++){
            const first = sorted[j];
            const second = sorted[j+1];
            if(first > second){
                swap(sorted,j,j+1)
            }
        }
    }
    return sorted;
}

console.log(bubbleSort(getRandomArray(10)));

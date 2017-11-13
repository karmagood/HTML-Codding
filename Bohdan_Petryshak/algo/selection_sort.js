const getRandomNumber = (min,max) => Math.floor(Math.random()*(max-min))+min

const getRandomArray = (size) =>{
    let arr = [];
    for(let i =0;i<size;i++){
        arr.push(getRandomNumber(0,50));
    }
    return arr;
};

const swap = (arr,first_index,second_index) =>{
    let c = arr[first_index];
    arr[first_index] = arr[second_index];
    arr[second_index] = c;
    return arr;
};


const SelectionSort = (arr) => {
    let sorted = arr.slice();
    for (let i = 0; i < sorted.length; i++) {
        let smallest_num = i;
        for (let j = i; j < sorted.length; j++) {
            if(sorted[smallest_num] > sorted[j]) {
                smallest_num = j;
            }
        }
        if(i != smallest_num) {
            swap(sorted, smallest_num, i);
        }
    }
    return sorted;
};

let a = getRandomArray(10);
console.log(SelectionSort(a));
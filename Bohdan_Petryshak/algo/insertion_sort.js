const getRandomNumber = (min,max) => Math.floor(Math.random()*(max-min))+min

const getRandomArray = (size) =>{
    let arr = [];
    for(let i =0;i<size;i++){
        arr.push(getRandomNumber(0,50));
    }
    return arr;
};

function insertionSort(array) {
    let sorted = array.slice();
    for(let i = 0; i < sorted.length; i++) {
        let temp = sorted[i];
        let j = i - 1;
        while (j >= 0 && sorted[j] > temp) {
            sorted[j + 1] = sorted[j];
            j--;
        }
        sorted[j + 1] = temp;
    }
    return sorted;
}
// let a = [5,4,3,2,1];
// console.log(insertionSort(a));
console.log(insertionSort(getRandomArray(3)));
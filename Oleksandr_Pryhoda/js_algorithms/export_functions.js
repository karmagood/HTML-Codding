const randomArray = (length, max) => Array(length).fill().map(() => Math.round(Math.random() * max));

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

module.exports = {
    randomArray,
    swap
};
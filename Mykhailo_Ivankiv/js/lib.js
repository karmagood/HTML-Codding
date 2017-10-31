const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArray = (size) => {
  let arr = [];

  for (let i = 0; i < size; i += 1) {
    arr.push( getRandomNumber(0, 50));
  }

  return arr;
}

const swap = (arr, a, b) => {
  let c = arr[a];

  arr[a] = arr[b];
  arr[b] = c;

  return arr;
};

module.exports = {
  getRandomNumber,
  getRandomArray,
  swap
};
export default function generateRandomArray(n) {
    let array = [];
    for (let i = 0; i < n; i++){
        array.push(Math.floor(Math.random() * 200) - 50);
    }
    return array;
}

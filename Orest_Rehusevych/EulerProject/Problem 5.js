// 2520 is the smallest number that can be divided 
// by each of the numbers from 1 to 10 without any remainder.
//
//     What is the smallest positive number that 
// is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple() {
    let smallest = false;
    let counter = 1;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    while (!smallest) {
        for (let i = 0; i < 20; i++) {
            if (counter % arr[i] === 0) {
                smallest = true;
            }
            else {
                smallest = false;
                break
            }
        }
        if (!smallest) {
            counter++;
        }
        else {
            break
        }
    }
    if (smallest) {
        return console.log(counter);
    }
}

smallestMultiple();
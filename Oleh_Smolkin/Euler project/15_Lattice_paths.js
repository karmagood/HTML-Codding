// Starting in the top left corner of a 2×2 grid, and only being
// able to move to the right and down, there are exactly 6 routes
// to the bottom right corner.
//
// How many such routes are there through a 20×20 grid?

const findNumberOfRoutes = (size) => {
    // initialize matrix for dynamic
    // DPMatrix[i, j] show how much routes in grid with size ixj
    let DPMatrix = [];
    for (let i = 0; i <= size; i++) {
        DPMatrix.push(new Array())
        DPMatrix[i][0] = 1;
        DPMatrix[0][i] = 1;
    }

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            DPMatrix[i][j] = DPMatrix[i][j - 1] + DPMatrix[i - 1][j];
        }
    }

    return DPMatrix[size][size];
}

// Test case
// Answer: 6
console.log(findNumberOfRoutes(2));

// Task
// Answer: 137846528820
console.log(findNumberOfRoutes(20));
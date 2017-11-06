const findRoutesNum = function (gridSize) {
    gridSize++;
    var grid = [];

    for (let i = 0; i < gridSize; ++i) {
        grid.push([]);
        for (let j = 0; j < gridSize; ++j) grid[i].push(0);
    }

    grid[0][0] = 1;

    for (let i = 0; i < gridSize; ++i) {
        for (let j = 0; j < gridSize; ++j) {
            if (i > 0) grid[i][j] += grid[i - 1][j];
            if (j > 0) grid[i][j] += grid[i][j - 1];
        }
    }

    return grid[gridSize - 1][gridSize - 1];
};

module.exports = findRoutesNum;
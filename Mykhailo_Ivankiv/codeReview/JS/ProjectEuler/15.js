const main = (n) => {
    n++;
    var grid = [];
    for (let i = 0; i < n; ++i) {
        grid.push([]);
        for (let j = 0; j < n; ++j) grid[i].push(0);
    }


    grid[0][0] = 1;

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
             if (i > 0) grid[i][j] += grid[i - 1][j];
             if (j > 0) grid[i][j] += grid[i][j - 1];
        }
    }



    console.log(grid[--n][n]);
}


main(20);
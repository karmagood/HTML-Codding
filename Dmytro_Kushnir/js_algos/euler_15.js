// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//
//
//     How many such routes are there through a 20×20 grid?


const newMatrixOfValues = (cols, lines, value = 0) => {
    let matrix = new Array(lines);

    for (let a= 0; a < cols; a++){
        matrix[a] = new Array(cols).fill(value)
    }
    return matrix;
};

const generateLatice = (matrix, start, finish) => {
    /*
    * Idea is to use BFS traversing of a graph which represents edges of our grid (vertice is dot on lines crossings)
    * We declare that finish point has 1 aS a cardinality, then place same values on cells from which we can came there
    * afterwards repeating for all cells which got this values in it.
    * */

    let position = finish;
    matrix[position[0]][position[1]] = 1;
    let BFSlist = [finish];
    let BFS_tail, upNeighbour, leftNeighbour;

    while (BFSlist.length > 0){ //or position === start, but this way is more general

        position = BFSlist[0]; // pop from BFS list
        leftNeighbour = [ position[0], position[1] -1];
        upNeighbour = [ position[0] -1 , position[1] ];


        BFS_tail = BFSlist[BFSlist.length -1];



        if ( (position[0]) > 0 )
        {
            matrix[upNeighbour[0]][upNeighbour[1]] += matrix[position[0]][position[1]];
            if (!( // checking if this position not have been added allready
                    BFS_tail[0] ===  upNeighbour[0] &&
                    BFS_tail[1] ===  upNeighbour[1]) )
            { BFSlist.push( [position[0]-1, position[1] ] )}
        }
        if (position[1] > 0)
        {
            matrix[leftNeighbour[0]][leftNeighbour[1]] += matrix[position[0]][position[1]];

            if (!(
                    BFS_tail[0] ===  leftNeighbour[0] &&
                    BFS_tail[1] ===  leftNeighbour[1]
            ) ) { BFSlist.push( [position[0], position[1]-1 ]  )}

        }

        BFSlist.shift(); // delete processed element
        // console.log(matrix);

    }
    return matrix[start[0]][start[1]];
};

let matrix = newMatrixOfValues(3,3,0); // from testcase

console.log(generateLatice( matrix , start = [0,0], finish = [2,2] ));

matrix = newMatrixOfValues(21,21,0);

console.log(generateLatice( matrix , start = [0,0], finish = [20,20] ));
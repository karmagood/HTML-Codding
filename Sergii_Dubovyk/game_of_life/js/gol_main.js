const generateField = (size) => {
    let field = new Array(size);
    for (let i = 0; i < size; i++) field[i] = new Array(size).fill(0);
    return field;
};

const randomFillField = (field, filledPercentage) => {
    for(let x = 0; x < field.length; x++){
        for(let y = 0; y < field.length; y++){
            field[x][y] = (Math.random() < filledPercentage) ? 1 : 0;
        }
    }
    return field;
}

/*TODO: split this into subfunctions and add cycled field support*/
const getCellNeighbors = (yPos, xPos, field) => {
    let neighbors = Array(8);
    neighbors[0] =  field[yPos][xPos - 1];
    if (yPos !== 0 && xPos !== 0){
        neighbors[1] = field[yPos - 1][xPos - 1];
    } else {
        neighbors[1] = 0;
    }
    if (yPos !== 0){
        neighbors[2] = field[yPos - 1][xPos];
    } else {
        neighbors[2] = 0;
    }
    if (yPos !== 0){
        neighbors[3] = field[yPos - 1][xPos + 1];
    } else {
        neighbors[3] = 0;
    }
    neighbors[4] = field[yPos][xPos + 1];
    if (yPos !== field.length -1){
        neighbors[5] = field[yPos + 1][xPos + 1];
    }
    if (yPos !== field.length -1){
        neighbors[6] = field[yPos + 1][xPos];
    }
    if (yPos !== field.length -1){
        neighbors[7] = field[yPos + 1][xPos - 1];
    }
    let neighborsAlive = neighbors.filter((val) => {
        return val === 1;
    });
    return neighborsAlive.length;
};

const getCellNextState = (xPos, yPos, field) => {
    const neighborsAlive = getCellNeighbors(xPos, yPos, field);
    const isAlive = field[yPos][xPos];
    let nextState = -1;
    switch (isAlive) {
        case 0:
            return (neighborsAlive === 3) ? 1 : 0;
        case 1:
            return (neighborsAlive >= 2 && neighborsAlive <= 3) ? 1 : 0;
        default:
            return 0;
    }
};

const getNextGeneration = (currentGeneration) => {
    let nextGeneration = generateField(currentGeneration.length);
    for(let x = 0; x < currentGeneration.length; x++){
        for(let y = 0; y < currentGeneration.length; y++){
            nextGeneration[x][y] = getCellNextState(x, y, currentGeneration);
        }
    }
    return nextGeneration;
};

const simulateNIterations = (field, iterationsNum) => {
  for (let i = 0; i < iterationsNum; i++){
      field = getNextGeneration(field.slice());
  }
  return field;
};

const getAliveCellsNum = (field) => {
    let alive = 0;
    field.forEach((val) => {
        val.forEach((cell) => {alive += (cell === 1) ? 1 : 0;})

    });
    return alive;
}


var field = randomFillField(generateField(20), 0.7);
console.log(field);
field = simulateNIterations(field, 1);
console.log(getAliveCellsNum(field));
field = simulateNIterations(field, 1);
console.log(getAliveCellsNum(field));
field = simulateNIterations(field, 1);
console.log(getAliveCellsNum(field));
field = simulateNIterations(field, 1);
console.log(getAliveCellsNum(field));
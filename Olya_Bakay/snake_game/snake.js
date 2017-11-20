//settings
let snakeX = snakeY =  2;
let height = width = 15;
let interval = 250;

// game variables
let length = score = 0;
let tailX = [snakeX];
let tailY = [snakeY];
let fX, fY;
let running = gameOver = false;
let direction = "right";
var int;

//starting the game
function run() {
    init();
    int = setInterval(gameLoop, interval);
}

//initializing the main things
const init = () => {
    createMap();
    createSnake();
    createWalls();
    createFruit();
};

//generates the map for the snake
const createMap = () => {
    document.write("<table>");
    for(let y=0; y < height; y++){
        document.write("<tr>");
        for(let x=0; x < width; x++){
            document.write("<td class='blank' id='"+ x + "-"+ y+"'></td>");
        }
        document.write("</tr>")
    }
    document.write("</table>");
};

//generates walls for the board
const createWalls = () => {
    for(let y=0; y < height; y++){
        for(let x = 0; x < width; x++) {
            if ((x === 0)||(x === height - 1) || (y === 0) ||(y === width - 1)){
                set(x, y, "wall");
            }
        }
    }
};

//generates the snake
const createSnake = () => {
    set(snakeX, snakeY, "snake");
};

const createFruit = () => {
    let found = false;
    while (!found && (length < (width-1)*(height-1)+1)){
        var fruitX = rand(1, width - 1);
        var fruitY = rand(1, height - 1);
        if (getType(fruitX, fruitY) === "blank")
            found = true;
    }
    set(fruitX, fruitY, "fruit");
    fX = fruitX;
    fY = fruitY;
};


const get = (x, y) =>{
    return document.getElementById(x+"-"+y);
};

const set = (x, y, value) => {
    if (x !== null && y !== null)
        get(x,y).setAttribute("class", value);
};

const rand = (min, max) => {
    return Math.floor(Math.random()*(max - min) + min);
};

const getType = (x, y) => {
    return get(x, y).getAttribute("class");
};


window.addEventListener("keydown", function key(){
    let key = window.event.keyCode;
    if (!running)
        running = true;
    switch (key) {
        case 37:
            if (direction !== "right" ) return direction = "left";
            break;
        case 38:
            if (direction !== "down") return direction = "up";
            break;
        case 39:
            if (direction !== "left") return direction = "right";
            break;
        case 40:
            if (direction !== "up") return direction = "down";
            break;
        case 32:
            running = false;
            break;

        default: return
    }
});


function gameLoop() {
    if (running && !gameOver){
        update();
    }
    else if(gameOver){
        clearInterval(int);
    }
}

function update() {

    set(fX, fY, "fruit");
    updateTail();
    set(tailX[length], tailY[length], "blank");
    if (direction === "up")
        snakeY--;
    else if (direction === "down")
        snakeY++;
    else if (direction === "left")
        snakeX--;
    else if (direction === "right")
        snakeX++;

    set(snakeX, snakeY, "snake");


    for (let  i = tailX.length-1; i >= 0; i--){
        if (snakeX === tailX[i] && snakeY === tailY[i]){
            gameOver = true;
            break;
        }
    }
    if (snakeX === 0 || snakeX === width-1 || snakeY === 0 || snakeY === height -1)
        gameOver = true;

    else if (snakeX === fX && snakeY === fY){
        score += 5;
        createFruit();
        length += 1;
        interval -= 5;
        clearInterval(int);
        int = setInterval(gameLoop, interval);
        console.log(interval, int);
    }
    document.getElementById("score").innerHTML = "Score: " + score;
}


function updateTail() {
    for(let i = length; i > 0; i--){
        tailX[i] = tailX[i-1];
        tailY[i] = tailY[i-1];
    }
    tailX[0] = snakeX;
    tailY[0] = snakeY;
}

run();
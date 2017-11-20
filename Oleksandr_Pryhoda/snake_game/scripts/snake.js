//settings 
let snakeX = 2;
let snakeY = 2;
let height = 28;
let width = 50;
let interval = 100;
let increment = 4;

//game variables 
let length = 0;
let tailX = [snakeX];
let tailY = [snakeY];
let fX;
let fY;
let running = false;
let gameOver = false;
let direction = -1; // up = 0, down = -1, left = 1, right = 2
let int;
let score = 0;
//temporary direction (this fixes  too quickly keys pressing)
let tempdir = direction;

// Start the game
function run(){
    init();
    int = setInterval(gameLoop, interval);
}

//Initialize starting conditions
function init(){
    createMap();
    createSnake();
    createFruit();
}

//Creates Map
function createMap(){
    document.write("<table>");

    for(let y = 0; y < height; y++){
        document.write("<tr>");
        for(let x = 0; x < width; x++){
            if(x === 0 || x === width -1 || y === 0 || y === height -1){
                document.write("<td class='wall' id='"+ x + "-" + y +"'></td>");
            }else{
                document.write("<td class='blank' id='"+ x + "-" + y +"'></td>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

//Creates snake
function createSnake(){
    set(snakeX, snakeY, "snake");
}

//Get element by id
function get(x,y){
    return document.getElementById(x+"-"+y);
}

//Set class for element
function set(x,y,value){
    if(x !== null && y !== null)
        get(x,y).setAttribute("class", value);
}

//Generate random number
function rand(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

//Get class of element
function getType(x,y){
    return get(x,y).getAttribute("class");
}

//Create fruit
function createFruit(){
    let found = false;
    let fruitX, fruitY;
    while(!found && (length < (width-2)*(height-2)+1)){
        fruitX = rand(1,width-1);
        fruitY = rand(1,height-1);
        if(getType(fruitX, fruitY) === "blank")
            found = true;
    }
    set(fruitX, fruitY, "fruit");
    fX = fruitX;
    fY = fruitY;
}

//Get user input from keyboard
window.addEventListener("keypress", function key(event){
    //if key is W set direction up 
    var key = event.keyCode;
    if(direction !== -1 && (key === 38))
        tempdir = 0;
    //if key is S set direction down
    else if(direction !== 0 && (key === 40))
        tempdir = -1;
    //if key is A set direction left 
    else if(direction !== 2 && (key === 37))
        tempdir = 1;
    //if key is D set direction right 
    else if(direction !== 1 && (key === 39))
        tempdir = 2;
    if(!running)
        running = true;
    else if(key === 13)
        running = false;
});

function gameLoop(){
    if(running && !gameOver){
        update();
    }else if(gameOver){
        clearInterval(int);
    }
}

// Update game conditions
function update(){
    direction = tempdir;
    //prevents fruit from not showing up 
    set(fX, fY, "fruit");
    //update the tail 
    updateTail();
    //sets the last segment of the tail to blank  before moving the snake 
    set(tailX[length], tailY[length], "blank");
    //updates the position of the snake according to the direction 
    if(direction === 0)
        snakeY--;
    else if(direction === -1)
        snakeY++;
    else if(direction === 1)
        snakeX--;
    else if(direction === 2)
        snakeX++;
    //draws the head of the snake on the tail 
    set(snakeX, snakeY, "snake");
    //checks for collisions with self 
    for(let i = tailX.length-1; i >=0; i--){
        if(snakeX === tailX[i] && snakeY === tailY[i]){
            gameOver = true;
            break;
        }
    }
    //checks for collision with wall 
    if(snakeX === 0 || snakeX === width-1 || snakeY === 0 || snakeY === height-1)
        gameOver = true;
    //checks for collisions with fruit 
    else if(snakeX === fX && snakeY === fY){
        //adds 4 to the score 
        score+=4;
        //creates new fruit, which automatically replaces the old one 
        createFruit();
        //adds the set increment to the length of the snake making it longer 
        length+=increment;
    }
    document.getElementById("score").innerHTML = "Score: "+ score;
}

//Update tails position
function updateTail(){
    for(let i = length; i > 0; i--){
        tailX[i] = tailX[i-1];
        tailY[i] = tailY[i-1];
    }
    tailX[0] = snakeX;
    tailY[0] = snakeY;
}

//Run the game
run();
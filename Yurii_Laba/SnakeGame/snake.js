let snakeX = 2;
let snakeY = 2;
let height = 30;
let width = 30;
let interval = 200;
let length = 0;
let score = 0;


//game variables
let tailX = [snakeX];
let tailY = [snakeY];

//coordinates of fruit
let fX;
let fY;


let running = false;
let gameOver = false;
let direction;//up = 0, down = -1, left =1, right = 2
let int;

function run() {
    init();
    setInterval(gameLoop, interval)
}

function init() {
    createMap();
    createWalls();
    createSnake();
    createFruit();
}

function createMap() {
    document.write("<table>");

    for(let y = 0; y < height; y++){
        document.write("<tr>");
        for(let x = 0; x < width; x++) {
            //if(x === 0 || x === width -1 ||y === 0 || y === height-1){
                //document.write("<td class='wall' id='"+ x + "-" + y +"'></td>")
            //}else {
                document.write("<td class='blank' id='"+ x + "-" + y +"'></td>")
            //}
        }
        document.write("</tr>");
    }
    document.write("</table>");

}

function createWalls() {
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++) {
            if ((x === 0)||(x ===height-1) || (y === 0) ||(y===width-1)){
                set(x, y, "wall");
            }
        }
    }
}


function createSnake() {
    set(snakeX, snakeY, "snake");
}

function get(x, y) {
    return document.getElementById(x+"-"+y)
}

function set(x, y, value) {
    if (x != null && y != null){
    get(x, y).setAttribute("class", value);
    }
}

function rand(min , max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getType(x ,y) {
    return get(x, y).getAttribute("class");
}


function createFruit() {
    let found = false;
    while (!found && (length < (width-1)*(height-1)+1)){

        let fruitX = rand(1, width - 1);
        let fruitY = rand(1, height - 1);
        if(getType(fruitX, fruitY) === "blank"){
            found = true;
        }
        set(fruitX, fruitY, "fruit");
        fX = fruitX;
        fY = fruitY;

    }
}



window.addEventListener("keypress", function key() {
    let key = event.keyCode;
    running = true;
    if((key === 119)|| (key ===87)){
        direction = 0;
    }
    else if((key === 115)|| (key === 83)){
        direction = -1;
    }
    else if((key === 97)|| (key === 65)){
        direction = 1;
    }
    else if((key === 100)|| (key === 68)){
        direction = 2;
    }
    else if(key === 32){
        running = false;
    }
}
);

function gameLoop() {
    if(running && !gameOver){
        update();
    }else if(gameOver){
        clearInterval(int);
    }
}

function update() {

    set(fX, fY, "fruit");
    updateTail();
    set(tailX[length], tailY[length], "blank");
    if(direction === 0){
        snakeY --;
    }else if(direction === -1){
        snakeY ++;
    }
    else if(direction === 1){
        snakeX --;
    }else if(direction === 2){
        snakeX ++;
    }

    for(let i = tailX.length-1; i>=0; i--){
        if(snakeX===tailX[i] && snakeY===tailY[i]){
            gameOver=true;
            break;
        }
    }

    if(getType(snakeX, snakeY) === "wall"){
        gameOver=true;
    }
    set(snakeX, snakeY, "snake");
    if(snakeX === fX && snakeY === fY){
        createFruit();
         length +=4;
        score += 4;
        interval-=1;
        setInterval(gameLoop, interval);
    }

    document.getElementById("score").innerHTML = "Score: "+score;
}

function updateTail() {
    for(let i=length; i > 0; i--){

        tailX[i] = tailX[i-1];
        tailY[i] = tailY[i-1];
    }
    tailX[0] = snakeX;
    tailY[0] = snakeY;
}

run();
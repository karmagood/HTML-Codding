// game settings
let snakeX = 2;
let snakeY = 2;
let height = 30;
let width = 30;
let interval = 50;
let increment = 20;

// game variables
let length = 0;
let tailX = [snakeX];
let tailY = [snakeY];
let fX;
let fY;
let running = false;
let gameOver = false;
let direction = -1; // can be -1: down, 0:up, 1: left, right: 2
let int;
let score = 0;

/**
 * entry point of the game
 */

function run() {
    init();
    int = setInterval(gameLoop, interval);
}

function init() {
    createMap();
    createSnake();
    createFruit();
}

/**
 * Generates the map for the snake
 */
function createMap() {
    document.write('<table>');
    for(let y = 0; y < height; y++) {
        document.write('<tr>');
        for(let x = 0; x < width; x++) {
            if (x === 0 || y === 0 || y === height - 1 || x === width - 1) {
                document.write("<td class='wall' id='"+ x + '-' + y + "'></td>")
            } else {
                document.write("<td class='blank' id='"+x+'-'+y+"'></td>")
            }
        }
        document.write('</tr>')
    }
    document.write("</table>")
}
function createSnake() {
    set(snakeX, snakeY, 'snake')
}
function get(x, y) {
    return document.getElementById(x+'-'+y);
}
function set(x, y, value){
    if(x!== null && y!== null) {
        get(x,y).setAttribute('class', value);

    }

}

function rand(min, max) {
    return Math.floor(Math.random()*(max - min) + min);
}
function getType(x, y) {
    return get(x, y).getAttribute('class');
}
function createFruit() {
    let found = false;
    let fruitX;
    let fruitY;
    while(!found && (length < (width-2)*(height-2) + 1)) {
        fruitX = rand(1, width - 1);
        fruitY = rand(1, height - 1);
        if(getType(fruitX, fruitY) === 'blank') {
            found = true;
        }
    }
    set(fruitX, fruitY, 'fruit');
    fX = fruitX;
    fY = fruitY;
}

window.addEventListener('keypress', function key() {
    // if key ===W
    let key = event.keyCode;
    if(direction !== -1 && (key === 119 || key === 87))
        direction = 0;
    // if key === S
    else if(direction !== 0 && (key === 115 || key === 83))
        direction = -1;
    // if key === A
    else if(direction !== 2 && (key === 97 || key === 65))
        direction = 1;
    // if key === D
    else if(direction !== 1 && (key === 100 || key === 68))
        direction = 2;
    if(!running)
        running = true;
    else if(key === 32)
        running = false;
});

function gameLoop() {
    if(running && !gameOver) {
        update();
    } else if(gameOver) {
        clearInterval(int);
    }
}

function update() {
    set(fX, fY, 'fruit');
    updateTail();
    set(tailX[length], tailY[length], 'blank');
    if(direction === 0) {
        snakeY--;
    } else if(direction === 1) {
        snakeX--;
    } else if(direction === -1) {
        snakeY++;
    } else if(direction === 2) {
        snakeX++;
    }
    set(snakeX, snakeY, 'snake');
    for (let i = tailX.length - 1;i > 0; i--) {
        if(snakeX === tailX[i] && snakeY === tailY[i]) {
            gameOver = true;
            break;
        }
    }
    if(snakeX === 0 || snakeX === width - 1 || snakeY === 0 || snakeY === height - 1) {
        gameOver = true;
    } else if(snakeX === fX && snakeY === fY) {
        score+=4;
        createFruit();
        length+= increment;
    }
    document.getElementById("score").innerHTML = 'Score: ' + score;
}

function updateTail() {
    for(let i = length; i > 0; i--) {
        tailX[i] = tailX[i - 1];
        tailY[i] = tailY[i - 1];
    }
    tailX[0] = snakeX;
    tailY[0] = snakeY;
}

run();


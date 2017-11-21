const EMPTY = 0;
const BARRICADE = 1;
const SNAKE = 2;
const FOOD = 3;

const WORLD_HEIGHT = 40;
const WORLD_WIDTH = 20;


let index = 0;
let direction = "0";



let World = Array(WORLD_HEIGHT)
    .fill()
    .map(() => new Array(WORLD_WIDTH).fill(EMPTY));



const renderWorldCell = (cell) => {
    switch (cell) {
        case EMPTY :
            return `<div class="World__cell"></div>`
        case BARRICADE:
            return `<div class="World__cell World__cell_barricade"></div>`
        case SNAKE:
            return `<div class="World__cell World__cell_snake"></div>`
        case FOOD:
            return `<div class="World__cell World__cell_food"></div>`
        default :
            return `<div class="World__cell World__cell_wtf">A!</div>`
    }
};


let MatrixArray = [[[0,0,0], [1,1,1], [0,1,0]], //T
[[0,0,0,0], [1,1,1,1], [0,0,0,0], [0,0,0,0]],   //line
[[0,0,0], [1,1,0], [0,1,1]],    //качка
[[1,1], [1,1]], //квадрат
[[0,0,0], [1,1,1], [0,0,1]],   //гак
[[0,0,0], [0,1,1], [1,1,0]] //качка

];

let FigureArray = [ [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
],  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
],  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
], [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
],  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
],  [
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
]];

let Snake = FigureArray[index];


const addObjectToWorld = (coordinates, world, type) => {
    coordinates.forEach(([x, y]) =>console.log(x, y)) ;
    coordinates.forEach(([x, y]) => world[x][y] = type) ;
};

const clone = (arr) => arr.slice();

// const increment = (max) => (val) => (val + 1) % max;
// const decrement = (max) => (val) => val - 1 < 0 ? max : val - 1;
//
// const moveSnake = (direction, snake, restrictions) => {
//     let head = clone(snake[snake.length - 1]);
//
//     if (direction === "right") head[1] = increment(restrictions[0])(head[1]);
//     else if (direction === "left") head[1] = decrement(restrictions[0] - 1)(head[1]);
//     else if (direction === "top") head[0] = decrement(restrictions[1] - 1)(head[0]);
//     else if (direction === "bottom") head[0] = increment(restrictions[1])(head[0]);
//
//     snake.push(head);
//
//     snake.shift();
//     return snake;
// };


const moving = (snake, world) => {
    let new_s = JSON.parse(JSON.stringify(snake));  //cloning snake deep copy
    if(direction === "right"){
        for (j = snake.length -1; j >= 0 ; j-- ){
            const new_y = snake[j][1] +1;
            if( (new_y >= 20) || (world[snake[j][0]][new_y] !== EMPTY)){
                direction = "0";
                return snake;
            }
            world[snake[j][0]][snake[j][1]] = EMPTY;
            new_s[j][1] = new_s[j][1]+1;
        }
        direction = "0";
        return new_s;

    }
    if(direction === "left"){
        for (j = snake.length -1; j >= 0 ; j-- ){
            const new_y = snake[j][1] - 1;
            if( (new_y < 0) || (world[snake[j][0]][new_y] !== EMPTY)){
                direction = "0";
                return snake;
            }
            world[snake[j][0]][snake[j][1]] = EMPTY;
            new_s[j][1] = new_s[j][1]-1;
        }
        direction = "0";
        return new_s;

    }else {
        for (i = 0; i < snake.length; i++) {
            const new_x = snake[i][0] + 1;
            if ((new_x >= world.length) || (world[new_x][snake[i][1]] !== EMPTY)) {
                return snake;
            }
            new_s[i][0] = new_s[i][0] + 1;
        }
        return new_s;
    }
};

const creation = (snake, world) => {
    snake_result = moving(snake, world);
    if(snake_result === snake){
        return [snake, false];
    }
    return [snake_result, true];
};

const generate = () =>{
    return Math.floor((Math.random() * 6));
};

const getElementIndex = (el) => Array
    .prototype.slice.call(el.parentNode.childNodes)
    .filter(node => node.nodeType === 1)
    .indexOf(el);

const addFoodHandler = (ev) => {
    const el = ev.target;

    if (el.classList.contains("World__cell")) {
        const row = el.parentNode;
        const y = getElementIndex(el);
        const x = getElementIndex(row);

        World[x][y] = FOOD;
    }
};


const handleKeys = (ev) => {
    switch (ev.keyCode) {
        case 39:
            return direction = "right";
        case 37:
            return direction = "left";

        default:
            return
    }
};

class Game {
    constructor(root) {
        root.addEventListener("keydown", handleKeys, false);
        root.addEventListener("click", addFoodHandler, false);
        setInterval(
            () => {
                addObjectToWorld(Snake, World, EMPTY);
                let result = creation(Snake, World);
                Snake = result[0];
                // console.log(Snake);
                addObjectToWorld(Snake, World, SNAKE);
                if(result[1] === false){
                    //generate new coordinates of snake
                    index = generate();
                    Snake = FigureArray[index];
                }
                root.innerHTML = this.render(World);
            },
            300
        );
    }

    render(World) {
        return `
            <div class="World">
                ${World.map(row => `
                    <div class="World__row">
                        ${row
            .map((cell) => renderWorldCell(cell))
            .join("")
            }
                    </div>
                `).join("")}
            </div>
        `
    };
}

new Game(document.body);


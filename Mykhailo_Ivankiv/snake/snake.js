const EMPTY = 0;
const BARRICADE =  1;
const SNAKE = 2;
const FOOD = 3;

const WORLD_HEIGHT = 20;
const WORLD_WIDTH = 20;

let World = Array(WORLD_HEIGHT)
    .fill()
    .map ( () => new Array (WORLD_WIDTH).fill(EMPTY) );

World[0][0] = SNAKE;
World[0][1] = SNAKE;

World[1][2] = BARRICADE;

World[1][3] = FOOD;

const renderWorldCell = (cell) => {
    if (cell === EMPTY ) {
        return `<div class="World__cell"></div>`
    } else if (cell === BARRICADE) {
        return `<div class="World__cell World__cell_barricade"></div>`
    } else if ( cell === SNAKE) {
        return `<div class="World__cell World__cell_snake"></div>`
    } else if (cell === FOOD) {
        return `<div class="World__cell World__cell_food"></div>`
    } else {
        return `<div class="World__cell World__cell_wtf">A!</div>`
    }
};

const renderWorld = (World) => `
    <div class="World">
        ${World.map( row =>  `
            <div class="World__row">
                ${row
                    .map((cell) => renderWorldCell(cell))
                    .join("")
                }
            </div>    
        `).join("")}
    </div>
`;

let Snake = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
];

const addSnakeToWorld = (snake, world) => {
    snake.forEach( ([x, y]) => world[x][y] = SNAKE);
};

const clearSnake = (snake, world) => {
    snake.forEach( ([x, y]) => world[x][y] = EMPTY);
};

const clone = (arr) => arr.slice();

const moveSnake = (direction, snake) => {
    let head = clone(snake[snake.length - 1]);

    if (direction === "right") head[1]++;
    else if (direction === "left") head[1]--;
    else if (direction === "top") head[0]--;
    else if (direction === "bottom") head[0]++;


    snake.push(head);

    snake.shift();
    return snake;
};

let direction = "right";

const handleKeys = (ev)=> {
    console.log(ev);

    if (ev.keyCode === 39)  { //right
        direction = "right";
    } else if (ev.keyCode === 37) {
        direction = "left";
    } else if (ev.keyCode === 38) {
        direction = "top";
    } else if (ev.keyCode === 40) {
        direction = "bottom";
    }
};

document.body
    .addEventListener("keydown", handleKeys, false);

setInterval(
    () => {
        clearSnake(Snake, World);
        Snake = moveSnake(direction, Snake);
        addSnakeToWorld(Snake, World);
        document.body.innerHTML = renderWorld(World);
    },
    500
);


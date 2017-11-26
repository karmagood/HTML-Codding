const EMPTY = 0;
const BARRICADE =  1;
const SNAKE = 2;
const FOOD = 3;

const WORLD_HEIGHT = 40;
const WORLD_WIDTH = 40;

let World = Array(WORLD_HEIGHT)
    .fill()
    .map ( () => new Array (WORLD_WIDTH).fill(EMPTY) );

World[0][0] = SNAKE;
World[0][1] = SNAKE;

World[1][2] = BARRICADE;

World[1][3] = FOOD;

const renderWorldCell = (cell) => {
    switch  (cell) {
        case EMPTY : return `<div class="World__cell"></div>`
        case BARRICADE: return `<div class="World__cell World__cell_barricade"></div>`
        case SNAKE: return `<div class="World__cell World__cell_snake"></div>`
        case FOOD: return `<div class="World__cell World__cell_food"></div>`
        default : return `<div class="World__cell World__cell_wtf">A!</div>`
    }
};

let Snake = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
];

const addObjectToWorld = (coordinates, world, type) => coordinates.forEach( ([x, y]) => world[x][y] = type);

const clone = (arr) => arr.slice();

const increment = (max) => (val) => (val + 1) % max;
const decrement =  (max) => (val) => val - 1 < 0 ? max : val - 1;

const moveSnake = (direction, snake, restrictions) => {
    let head = clone(snake[snake.length - 1]);

    if (direction === "right") head[1] = increment(restrictions[0])(head[1]);
    else if (direction === "left") head[1] = decrement (restrictions[0]-1 )(head[1]);
    else if (direction === "top") head[0] = decrement( restrictions[1]-1 )(head[0]);
    else if (direction === "bottom") head[0] = increment(restrictions[1])(head[0]);

    snake.push(head);

    snake.shift();
    return snake;
};



const getElementIndex = (el) => Array
    .prototype.slice.call ( el.parentNode.childNodes )
    .filter ( node => node.nodeType === 1)
    .indexOf ( el );

const addFoodHandler = (ev) => {
    const el = ev.target;

    if (el.classList.contains("World__cell")) {
        const row = el.parentNode;
        const y = getElementIndex(el);
        const x = getElementIndex(row);

        World[x][y] = FOOD;
    }
};

let direction = "right";

const handleKeys = (ev)=> {
    switch (ev.keyCode) {
        case 39: return direction = "right";
        case 37: return direction = "left";
        case 38: return direction = "top";
        case 40: return direction = "bottom";
        default: return
    }
};

class Game {
    constructor (root) {
        root.addEventListener("keydown", handleKeys, false);
        root.addEventListener("click", addFoodHandler, false);

        setInterval(
            () => {
                addObjectToWorld(Snake, World, EMPTY);
                Snake = moveSnake(direction, Snake, [WORLD_HEIGHT, WORLD_WIDTH]);
                addObjectToWorld(Snake, World, SNAKE);
                root.innerHTML = this.render(World);
            },
            300
        );
    }

    render (World) {
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


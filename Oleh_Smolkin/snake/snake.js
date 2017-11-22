const EMPTY = 0;
const BRICK =  1;
const SNAKE = 2;
const BLOCK = 3;

const TOP = 0;
const RIGHT =  1;
const BOTTOM = 2;
const LEFT = 3;

const WORLD_HEIGHT = 26;
const WORLD_WIDTH = 26;

let World = Array(WORLD_HEIGHT)
    .fill()
    .map ( () => new Array (WORLD_WIDTH).fill(EMPTY) );

World = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 3, 3, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 3, 3, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [3, 3, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]



const renderWorldCell = (cell) => {
    switch  (cell) {
        case EMPTY : return `<div class="World__cell"></div>`
        case BRICK: return `<div class="World__cell World__cell_brick"></div>`
        case SNAKE: return `<div class="World__cell World__cell_snake"></div>`
        case BLOCK: return `<div class="World__cell World__cell_block"></div>`
        default : return `<div class="World__cell World__cell_wtf">A!</div>`
    }
};

const renderTank = (tank) => {
    let classes_of_tank = "Tank Tank_player_tank ";
    switch  (tank) {
        case TOP :
            classes_of_tank += "Tank_top_direction";
            break;
        case RIGHT:
            classes_of_tank += "Tank_right_direction";
            break;
        case BOTTOM:
            classes_of_tank += "Tank_bottom_direction";
            break;
        case LEFT:
            classes_of_tank += "Tank_left_direction";
            break;
        default :
            break;
    }
    return `<div class="` + classes_of_tank + `"></div>`;
};

const increment = (max) => (val) => (val + 1) % max;
const decrement =  (max) => (val) => val - 1 < 0 ? max : val - 1;

const moveTank = (direction, position, restrictions) => {
    let head = clone(position);

    if (direction === RIGHT) position[1] = increment(restrictions[0])(head[1]);
    else if (direction === LEFT) position[1] = decrement (restrictions[0]-1 )(head[1]);
    else if (direction === TOP) position[0] = decrement( restrictions[1]-1 )(head[0]);
    else if (direction === BOTTOM) position[0] = increment(restrictions[1])(head[0]);

    return position;
};



const getElementIndex = (el) => Array
    .prototype.slice.call ( el.parentNode.childNodes )
    .filter ( node => node.nodeType === 1)
    .indexOf ( el );

let direction = TOP;

const handleKeys = (ev)=> {
    switch (ev.keyCode) {
        case 39: return direction = RIGHT;
        case 37: return direction = LEFT;
        case 38: return direction = TOP;
        case 40: return direction = BOTTOM;
        default: return
    }
};

class Game {
    constructor (root) {
        root.addEventListener("keydown", handleKeys, false);

        setInterval(
            () => {
                //addObjectToWorld(Snake, World, EMPTY);
                //Snake = moveSnake(direction, Snake, [WORLD_HEIGHT, WORLD_WIDTH]);
                //addObjectToWorld(Snake, World, SNAKE);
                root.innerHTML = this.render(World);
            },
            300
        );
    }

    render (World) {
        return `
            <div class="World">
                ${renderTank(direction)}
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


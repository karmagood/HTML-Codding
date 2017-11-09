import {WORLD_HEIGHT, WORLD_WIDTH, EMPTY, BLOCK, FROZEN} from "./config";
import Piece from './Piece';
import Fragment from './Fragment';
import {intersection} from 'ramda';


const higherHandleKeys = (board) => (ev) => {
    console.log(ev);
    switch (ev.keyCode) {
        case 32:
            return board.activePiece.rotate(board);
        case 39:
            return board.shiftThePiece("right");
        case 37:
            return board.shiftThePiece("left");
        case 38:
            return direction = "top";
        case 40:
            return direction = "bottom";
        default:
            return
    }
};


class Board {
    constructor(width, height) {
        document.body.addEventListener("keydown", higherHandleKeys(this), false);
        this.fragments = [];
        this.width = width;
        this.height = height;
        this.world = Array(this.height)
            .fill()
            .map(() => new Array(this.width).fill(EMPTY));

        this.score = 0;
    }


    renderWorldCell(cell) {
        switch (cell) {
            case EMPTY :
                return `<div class="piece__cell"></div>`
            case BLOCK:
                return `<div class="piece__cell piece__cell_block"></div>`
            case FROZEN:
                return `<div class="piece__cell piece__cell_frozen"></div>`
            default :
                return `<div class="piece__cell World__cell_wtf">A!</div>`
        }
    };


    render() {
        // console.log(this.fragments);
        return `<div class="World">
                ${this.fragments.map(fragment => fragment.render()).join("")} </div>`
    };

    addFragment(fragment) {
        this.fragments.push(fragment);
    }

    getActiveFragment() {
        return this.fragments[this.fragments.length - 1];
    }


}


const stopMoving = (board) => {
    let active = board.getActiveFragment();
    let newX = active.coordinates[0] + 1;
    if (newX > WORLD_HEIGHT - active.piece.shape.length) {
        return true;
    }


    return isBottomColision(board);

};


const isBottomColision = (board) => {
    let active = board.getActiveFragment().getXs().map(el => el + 1);
    let activeXs = intersection(active);
    for (let i = 0; i < board.fragments.length-1; ++i) {
        if (activeXs(board.fragments[i].getXs()).length){
            return true;
        }
    }
    return false;


};


const mainFunc = () => {

    let b = new Board(WORLD_WIDTH, WORLD_HEIGHT);
    let p1 = new Piece();


    let fr1 = new Fragment(p1);


    b.addFragment(fr1);

    document.body.innerHTML = b.render();

    setInterval(
        () => {
            if (stopMoving(b)) {
                b.addFragment(new Fragment(new Piece()));
            } else {
                let active = b.getActiveFragment();
                let coords = active.coordinates;
                active.setCoordinates(++coords[0], coords[1]);
            }



            document.body.innerHTML = b.render();

        },
        300
    );
};


mainFunc();

// let items = b.render();
// console.log(items);





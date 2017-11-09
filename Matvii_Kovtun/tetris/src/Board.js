import {WORLD_HEIGHT, WORLD_WIDTH, EMPTY, BLOCK, FROZEN} from "./config";
import Piece from './Piece';
import Fragment from './Fragment';
import {intersection, reduce} from 'ramda';


const higherHandleKeys = (board) => (ev) => {
    console.log(ev);
    switch (ev.keyCode) {
        case 32:
            return board.getActiveFragment().piece.rotate();
        case 39:
            return moveRight(board);
        case 37:
            return moveLeft(board);
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
        this.fragments = [];
        this.width = width;
        this.height = height;
        this.world = Array(this.height)
            .fill()
            .map(() => new Array(this.width).fill(EMPTY));

        this.score = 0;
    }


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


    return isFragmentCollision(board, el => [el[0] + 1, el[1]]);

};

const leftCollision = (board) => {
    let active = board.getActiveFragment();
    let newY = active.coordinates[1] - 1;
    if (newY < 0) {
        return true;
    }


    return isFragmentCollision(board, el => [el[0], el[1] - 1]);

};

const rightCollision = (board) => {
    let active = board.getActiveFragment();
    let newY = active.coordinates[1] - 1;
    if (newY > WORLD_WIDTH - active.piece.shape[0].length) {
        return true;
    }


    return isFragmentCollision(board, el => [el[0], el[1] + 1]);

};


const moveRight = (board) => {
    if (rightCollision(board)) return;
    let active = board.getActiveFragment();
    let coords = active.coordinates;
    active.setCoordinates(coords[0], ++coords[1]);

}


const moveLeft = (board) => {
    if (leftCollision(board)) return;
    let active = board.getActiveFragment();
    let coords = active.coordinates;
    active.setCoordinates(coords[0], --coords[1]);

};


const deleteRaws = (x, fragment) => {
    let xCoords = fragment.coordinates[0];
    let yCoords = fragment.coordinates[1];
    let delRaw = x - xCoords;

    if (delRaw <= fragment.piece.shape.length) {
        fragment.piece.shape = [
            ...fragment.piece.shape.slice(0, delRaw),
            ...fragment.piece.shape.slice(delRaw + 1)
        ];
    }

    if (xCoords < x ){
        fragment.setCoordinates(++xCoords, yCoords);
    }




}


const findRawToDelete = (board) => {
    let allCoordinates = board.fragments.map(el => el.getCoordinates()).reduce((accum, el) => {
        accum.push(...el);
        return accum
    }, []);


    let emptyBoard = Array(WORLD_HEIGHT).fill().map(() => Array(WORLD_WIDTH).fill(false));
    allCoordinates.forEach(([x, y]) => emptyBoard[x][y] = true);

    return emptyBoard.reduce((accum, el, i) => {
        if (el.indexOf(false) == -1) {
            accum.push(i);
        }
        return accum;
    }, []);

    // console.log(emptyBoard.map(el => el.join(",")).join("\n"));

};


const isOverlapping = (a, b) => a[0] == b[0] && a[1] == b[1];


const isFragmentCollision = (board, predictionFn) => {
        let active = board.getActiveFragment().getCoordinates().map(predictionFn);
        for (let i = 0; i < board.fragments.length - 1; ++i) {
            let fragmentCoordinates = board.fragments[i].getCoordinates();
            for (let j = 0; j < active.length; ++j) {
                for (let k = 0; k < fragmentCoordinates.length; ++k) {
                    if (isOverlapping(fragmentCoordinates[k], active[j])) {
                        return true;
                    }
                }

            }
        }
        return false;


    }
;


const mainFunc = () => {

    let b = new Board(WORLD_WIDTH, WORLD_HEIGHT);
    let p1 = new Piece();


    let fr1 = new Fragment(p1);


    b.addFragment(fr1);

    document.body.innerHTML = b.render();
    document.body.addEventListener("keydown", higherHandleKeys(b), false);


    setInterval(
        () => {
            if (stopMoving(b)) {
                b.addFragment(new Fragment(new Piece()));
                let rawsToDelete = findRawToDelete(b);
                if (rawsToDelete.length) {
                    b.fragments.forEach(fragment => rawsToDelete.map((x) => deleteRaws(x, fragment)));
                }
            } else {
                let active = b.getActiveFragment();
                let coords = active.coordinates;
                active.setCoordinates(++coords[0], coords[1]);
            }

            document.body.innerHTML = b.render();

        },
        170
    );
};


mainFunc();

// let items = b.render();
// console.log(items);





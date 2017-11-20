import Board from "./Board";
import {WORLD_HEIGHT, WORLD_WIDTH, EMPTY, BLOCK, FROZEN} from "./config";
import Piece from './Piece';
import Fragment from './Fragment';
import {intersection, reduce} from 'ramda';


const MAX_SPEED = 10;
const NORMAL_SPEED = 170;


class Game {
    constructor(mountingNode) {
        this.mountingNode = mountingNode;
        this.speed = NORMAL_SPEED;

        this.board = new Board(WORLD_WIDTH, WORLD_HEIGHT);

        this.board.setActiveFragment(new Fragment(new Piece()));

        this.mountingNode.innerHTML = this.board.render();

        this.mountingNode.addEventListener("keydown", this.higherHandleKeysDown.bind(this), false);
        this.mountingNode.addEventListener("keyup", this.higherHandleKeysUp.bind(this), false);


        this.intervalId = setInterval(this.getNextFrame.bind(this), this.speed);
    };

    getNextFrame() {
        if (this.stopMoving(this.board)) {
            this.board.addEntities(this.board.getActiveFragment());
            this.board.setActiveFragment(new Fragment(new Piece()));
            this.board.deleteRaws();

        } else {
            let active = this.board.getActiveFragment();
            let coords = active.coordinates;
            active.setCoordinates(++coords[0], coords[1]);
        }

        this.mountingNode.innerHTML = this.board.render();


    }

    checkRotation() {
        let phantom = this.board.getActiveFragment().piece.rotatePhantom();
        let [x, y] = this.board.getActiveFragment().coordinates;

        for (let i = 0; i < phantom.length; ++i) {
            for (let j = 0; j < phantom[i].length; ++j) {
                if (this.board.entities[x + i][y + j] || (y + j) >= this.board.width) return false;
            }
        }
        return true;

    }

    higherHandleKeysUp(ev) {
        console.log(ev.keyCode);
        switch (ev.keyCode) {
            case 40:
                return this.slowDown(); // bottom
            default:
                return
        }
    };

    higherHandleKeysDown(ev) {
        console.log(ev.keyCode);
        switch (ev.keyCode) {
            case 32:
                return (this.checkRotation() && this.board.getActiveFragment().piece.rotate());
            case 39:
                return this.moveRight();
            case 37:
                return this.moveLeft();
            case 38:
                return direction = "top";
            case 40:
                return this.speedUp(); // bottom
            case 80:
                return this.togglePause(); // key - p
            default:
                return
        }
    };

    speedUp() {
        clearInterval(this.intervalId);
        this.speed = MAX_SPEED;
        this.getNextFrame();
        this.intervalId = setInterval(this.getNextFrame.bind(this), this.speed);
    }

    slowDown() {
        clearInterval(this.intervalId);
        this.speed = NORMAL_SPEED;
        this.getNextFrame();
        this.intervalId = setInterval(this.getNextFrame.bind(this), this.speed);
    }


    stopMoving() {
        let active = this.board.getActiveFragment();
        let newX = active.coordinates[0] + 1;
        if (newX > WORLD_HEIGHT - active.piece.shape.length) {
            return true;
        }
        return this.isFragmentCollision(el => [el[0] + 1, el[1]]);

    };


    leftCollision() {
        let active = this.board.getActiveFragment();
        let newY = active.coordinates[1] - 1;
        if (newY < 0) {
            return true;
        }
        return this.isFragmentCollision(el => [el[0], el[1] - 1]);

    };

    rightCollision() {
        let active = this.board.getActiveFragment();
        let newY = active.coordinates[1] + 1;
        if (newY > WORLD_WIDTH - active.piece.shape[0].length) {
            return true;
        }


        return this.isFragmentCollision(el => [el[0], el[1] + 1]);

    };

    moveRight() {
        if (this.rightCollision()) return;
        let active = this.board.getActiveFragment();
        let coords = active.coordinates;
        active.setCoordinates(coords[0], ++coords[1]);

    }


    moveLeft() {
        if (this.leftCollision()) return;
        let active = this.board.getActiveFragment();
        let coords = active.coordinates;
        active.setCoordinates(coords[0], --coords[1]);

    };


    togglePause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = false;
        } else {
            this.getNextFrame();
            this.intervalId = setInterval(this.getNextFrame.bind(this), this.speed)
        }


    }

    isFragmentCollision(predictionFn) {
        let active = this.board.getActiveFragment().getCoordinates().map(predictionFn);
        // console.log(JSON.stringify(this.board.entities));


        for (let i = 0; i < active.length; ++i) {
            let [x, y] = active[i];
            if (this.board.entities[x][y]) return true;

        }
        return false;


    };
}


let g = new Game(document.body);



import {WORLD_HEIGHT, WORLD_WIDTH, EMPTY, BLOCK, FROZEN} from "./config";
import Piece from './Piece';
import Fragment from './Fragment';
import {intersection, reduce} from 'ramda';
import {getRandomColor} from './utils';


class Board {


    constructor(width, height) {
        this.activeFragment = undefined;
        this.width = width;
        this.height = height;
        this.world = Array(this.height)
            .fill()
            .map(() => new Array(this.width).fill(EMPTY));

        this.score = 0;

        this.entities = Array(this.height)
            .fill()
            .map(() => new Array(this.width).fill(false));
    }


    render() {
        //${getRandomColor()}
        return `<div class="World" style="background-color: #96E7C6 "> 
                 ${this.entities.map(row => `
                    <div class="World__row">
                        ${row
            .map(cell => `<div class="World__cell" style="background-color: ${cell && getRandomColor()}"></div>`)
            .join("")}
                     </div>`).join("")}
                 ${this.getActiveFragment().render()}       
                </div>`
    };


    setActiveFragment(fragment) {
        this.activeFragment = fragment;
    }

    getActiveFragment() {
        return this.activeFragment;
    }


    deleteRaws() {
        this.entities = this.entities.filter(row => row.indexOf(false) != -1);
        this.entities.unshift(...Array(this.height - this.entities.length).fill().map(() => new Array(this.width).fill(false)));
    }

    addEntities(fragment) {
        for (let i = 0; i < fragment.piece.shape.length; ++i) {
            for (let j = 0; j < fragment.piece.shape[i].length; ++j) {
                if (fragment.piece.shape[i][j]) {
                    this.entities[i + fragment.coordinates[0]][j + fragment.coordinates[1]] = fragment.piece.color;
                }
            }
        }
    }



}


export default Board;
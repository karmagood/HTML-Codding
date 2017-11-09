import {transpose, reverse, clone} from 'ramda';
import {EMPTY, BLOCK, FROZEN} from './config';
import {getRandom, getRandomColor} from "./utils";

class BasicPiece {
    constructor() {
        this.shape = clone(BasicPiece.shapes[getRandom(0, BasicPiece.shapes.length)]);
        this.color = getRandomColor();
    }


    rotate() {
        this.shape = transpose(this.shape).map(el => reverse(el));

    };

    renderPiece(cell) {
        let className;

        switch (cell) {
            case EMPTY :
                className = "piece__cell";
                break;
            case BLOCK:
                className = "piece__cell piece__cell_block";
                break;
            case FROZEN:
                className = "piece__cell piece_cell_frozen";
                break;
            default :
                return `<div class="${className} piece__cell_wtf">A!</div>`
        }

        return `<div class="${className}" style="background-color: ${getRandomColor()}"></div>`
    };

    render() {
        return `
            <div class="piece">
                ${this.shape.map(row => `
                    <div class="piece__row">
                        ${row.map((cell) =>
            this.renderPiece(cell)).join("")}
                    </div>`).join("")}
            </div>
        `
    }
}

BasicPiece.shapes = [[[1],
    [1],
    [1],
    [1]], [[1, 1], [1, 1]]];

export default BasicPiece;


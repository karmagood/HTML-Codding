import {getRandom} from "./utils";
import {WORLD_WIDTH, WORLD_HEIGHT} from "./config";


class Fragment {
    constructor(piece) {
        this.piece = piece;
        this.coordinates = [0, getRandom(0, WORLD_WIDTH - 1)];

    }

    getCoordinates () {
        let coords = [];
        for (let i = 0 ; i < this.piece.shape.length; ++i){
            for (let j = 0; j < this.piece.shape[i].length; ++j){
                if (this.piece.shape[i][j]){
                    coords.push([this.coordinates[0] + i, this.coordinates[1] + j]);
                }
            }
        }
        return coords;
    }


    render() {
        return `
            <div 
                style="top: ${this.coordinates[0] * 20}px; 
                       left: ${this.coordinates[1] * 20}px;
                       "
                class="fragment" 
            >
                ${this.piece.render()}
            </div>`;
    }

    setCoordinates(x, y){
        this.coordinates[0] = x;
        this.coordinates[1] = y;
        return this;
    }

}


export default Fragment;
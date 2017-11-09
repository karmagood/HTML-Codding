import {getRandom} from "./utils";
import {WORLD_WIDTH, WORLD_HEIGHT} from "./config";


class Fragment {
    constructor(piece) {
        this.piece = piece;
        this.coordinates = [0, getRandom(0, WORLD_WIDTH)];

    }

    render() {
        return `
            <div 
                style="top: ${this.coordinates[0] * 22}px; 
                       left: ${this.coordinates[1] * 22}px;
                       "
                class="fragment" 
            >
                ${this.piece.render()}
            </div>`;
    }

}


export default Fragment;
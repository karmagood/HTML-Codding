import {WORLD_WIDTH} from "./config"
import BasicPiece from "./BasicPiece";

class Piece extends BasicPiece {
    constructor() {
        super();
        let y = this.getRandom(0, WORLD_WIDTH);
        let root = [1, y];

        this.coordinates = [[root[0] - 1, root[1]], root, [root[0] + 1, root[1]]];
        this.color = this.getRandomColor();
    };
}


export default Piece;
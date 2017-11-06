const BasicPiece = require('./BasicPiece');


class Piece extends BasicPiece {
    // noinspection JSAnnotator
    constructor() {
        super();
        let root = [2, 5];
        this.coordinates = [[root[0] - 1, root[1]], root, [root[0] + 1, root[1]]];
        this.color = this.getRandomColor();
    };


}

module.exports = Piece;


export default class Piece{};
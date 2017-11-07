const HAXADECIMAL_LETTERS  = '0123456789ABCDEF';

class BasicPiece {
    getRandom (from, to) {
        return from + Math.floor(Math.random() * to);
    }

    getRandomColor() {
        return '#' + Array(6)
            .fill()
            .map( () => HAXADECIMAL_LETTERS[this.getRandom(0, 16)])
            .join("")
    };

    rotate () {

    };
}

export default BasicPiece;
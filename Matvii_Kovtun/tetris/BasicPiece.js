class BasicPiece {
    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[getRandom(0, 16)];
        }
        return color;
    };

    rotate();
}



module.exports = BasicPiece;
let Level = (columns, rows, tileWidth, tileHeight) => {
    this.columns = columns;
    this.rows = rows;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;

    this.tiles = [];
    for(let i = 0; i<this.columns;i++) {
        this.tiles[i] = [];
        for(let j = 0; j<this.rows; j++) {
            this.tiles[i][j] = 0;
        }
    }
};
class Level {
    constructor(columns, rows, tileWidth, tileHeight) {
        this.columns = columns;
        this.rows = rows;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;

        this.tiles = [];
        for(let i = 0; i<this.columns;i++) {
            this.tiles[i] = [];
            for(let j = 0; j<this.rows; j++) {
                this.tiles[i][j] = 0;
            }
        }
    }
    generate() {
        for(let i = 0; i < this.columns;i++) {
            for(let j = 0; j < this.rows; i++) {
                if(i === 0 || j === 0 || i === (this.columns - 1) || j === this.rows - 1) {
                    this.tiles[i][j] = 1;
                } else {
                    this.tiles[i][j] = 0;
                }
            }
        }
    }
}

Level.prototype.generate = function() {
    for(let i = 0; i < this.columns;i++) {
        for(let j = 0; j < this.rows; i++) {
            if(i === 0 || j === 0 || i === (this.columns - 1) || j === this.rows - 1) {
                this.tiles[i][j] = 1;
            } else {
                this.tiles[i][j] = 0;
            }
        }
    }
};
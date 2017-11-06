class BasicPiece {
    getRandom(from, to) {
        return from + Math.floor(Math.random() * to);
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[this.getRandom(0, 16)];
        }
        return color;
    };


}


class Piece extends BasicPiece {
    // noinspection JSAnnotator
    constructor() {
        super();
        let y = this.getRandom(0, WORLD_WIDTH);
        let root = [1, y];
        this.coordinates = [[root[0] - 1, root[1]], root, [root[0] + 1, root[1]]];
        this.color = this.getRandomColor();
    };


}


const WORLD_HEIGHT = 32;
const WORLD_WIDTH = 10;
const EMPTY = 0;
const BLOCK = 1;
const FROZEN = 2;


const handleKeys = (ev) => {
    // console.log(ev);
    switch (ev.keyCode) {
        case 39:
            return direction = "right";
        case 37:
            return direction = "left";
        case 38:
            return direction = "top";
        case 40:
            return direction = "bottom";
        default:
            return
    }
};


class Board {
    constructor(width, height) {
        document.body.addEventListener("keydown", handleKeys, false);
        this.activePiece = undefined;
        this.width = width;
        this.height = height;
        this.world = Array(this.height)
            .fill()
            .map(() => new Array(this.width).fill(EMPTY));

        this.score = 0;
    }


    renderWorldCell(cell) {
        switch (cell) {
            case EMPTY :
                return `<div class="World__cell"></div>`
            case BLOCK:
                return `<div class="World__cell World__cell_block"></div>`
            case FROZEN:
                return `<div class="World__cell World__cell_frozen"></div>`
            default :
                return `<div class="World__cell World__cell_wtf">A!</div>`
        }
    };


    renderWorld() {
        return `
            <div class="World">
                ${this.world.map(row => `
                    <div class="World__row">
                        ${row.map((cell) =>
            this.renderWorldCell(cell)).join("")}
                    </div>`).join("")}
            </div>
        `
    };

    setActivePiece(piece) {
        this.activePiece = piece;
    }

    renderPiece(piece, type) {
        piece.coordinates.forEach(([x, y]) => this.world[x][y] = type);
    }

    destroyLayers() {
        let rowsToDestroy = [];
        for (let i = this.height - 1; i >= 0; --i){
            let emptyRow = true;
            let frozenRow = true;
            for (let j = 0; j < this.width; ++j){
                if (this.world[i][j] !== 0) emptyRow = false;
                if (this.world[i][j] !== 2) frozenRow = false;

            }
            if (frozenRow) rowsToDestroy.push(i);
            if (emptyRow) break;
        }

        if (rowsToDestroy.length === 0) return 0;
        console.log(rowsToDestroy);
        
        

        for (let i = 0 ; i < rowsToDestroy.length; ++i)
            for (let j = 0; j < this.width; ++j) this.world[rowsToDestroy[i]][j] = 0;
    
        let lastDestroyed = rowsToDestroy[rowsToDestroy.length - 1];
        for (let i = lastDestroyed; i >= 0; --i){
            for (let j = 0 ; j < this.width; ++j){
                if (this.world[i][j] === 2){
                    this.world[i][j] = 0;
                    this.world[i + rowsToDestroy.length][j] = 2;
                }

            }
        }
        
    }

    getNewPos(piece) {
        let new_coords = [];
        for (let i = 0; i < piece.coordinates.length; ++i){
            let new_x = piece.coordinates[i][0] + 1;
            let new_y = piece.coordinates[i][1];
            // console.log(new_x, new_y);
            
            
            if (new_x >= WORLD_HEIGHT) return false;
            if (this.world[new_x][new_y] === 2) return false;
            new_coords.push([new_x, new_y]);
        }
        return new_coords;
    }

    dropThePiece() {


        let new_coords = this.getNewPos(this.activePiece);
        // console.log(new_coords);
        
        
        if (new_coords !== false) {
            this.renderPiece(this.activePiece, EMPTY);
            this.activePiece.coordinates = new_coords;
            this.renderPiece(this.activePiece, BLOCK);
        }else{
            this.renderPiece(this.activePiece, FROZEN);
            this.destroyLayers();
            this.activePiece = new Piece();
        }




    }


}


const mainFunc = () => {
    b = new Board(WORLD_WIDTH, WORLD_HEIGHT);
    p = new Piece();
    //
    b.setActivePiece(p);

    
    
    setInterval(
        () => {

            b.dropThePiece();
            document.body.innerHTML = b.renderWorld();
        },
        10
    );
}


mainFunc();

// let items = b.renderWorld();
// console.log(items);





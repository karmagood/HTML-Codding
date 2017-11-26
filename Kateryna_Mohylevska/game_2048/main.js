class Game{
    constructor(root_element){
        this.root_element = root_element;
        this.board = Array(4)
            .fill()
            .map ( () => new Array (4).fill(0));
        this.game = document.createElement('section');

        window.addEventListener("keydown", event => this.handleKeys(event));
    }

    start(){
        this.randomDigit();
        this.randomDigit();
        this.game.classList.add("game");
        this.root_element.appendChild(this.game);
        console.log(this.board);
        this.game.innerHTML = this.renderBoard();
    }

    handleKeys(ev){
        switch (ev.keyCode) {
            case 39: this.moveToRight(); break;
            case 37: this.moveToLeft(); break;
            case 38: this.moveToTop(); break;
            case 40: this.moveToBottom(); break;
            default: return;
        }
    };

    moveToRight(){
        for(let row = 0; row < this.board.length ; row++){
            for(let cell = this.board.length-2; cell > -1; cell--){
                let k = cell;
                while (k != 4){
                    if (this.board[row][k]==0){
                        break;
                    }
                    else {
                        if(this.board[row][k+1] != 0 && this.board[row][k+1] != this.board[row][k]){
                            break;
                        }
                        if(this.board[row][k+1] == this.board[row][k]){
                            this.board[row][k+1] += this.board[row][k];
                            this.board[row][k] = 0;
                            k++;
                        }else if (this.board[row][k+1] == 0){
                            this.board[row][k+1] = this.board[row][k];
                            this.board[row][k] = 0;
                            k++;}
                    }
                }
            }
        }
        this.game.innerHTML = this.renderBoard();
    }

    moveToTop(){
        console.log("bla2");
    }
    moveToBottom(){
        console.log("bla3");
    }


    moveToLeft(){
        for(let i = 0;i<4;i++){
            for(let j = 1;j<4;j++) {
                if (this.board[i][j] != 0) {
                    let k = j;
                    //console.log("cell number = ",j);
                    while (k != 5) {
                        if (this.board[i][k-1] != 0 && this.board[i][k-1] == this.board[i][k]){
                            this.board[i][k-1] *= 2;
                            this.board[i][k] = 0;
                            k+=1;
                        }
                        else if (this.board[i][k-1] == 0){
                            this.board[i][k-1] = this.board[i][j];
                            this.board[i][k] = 0;
                            k+=1;
                        }
                        else if (this.board[i][k-1] != 0 && this.board[i][k-1] != this.board[i][k]){
                            k=5;
                        }
                        // console.log("k = ",k);

                    }
                }
            }
        }
        console.log(this.board);
        this.game.innerHTML = this.renderBoard();
    };

    randomDigit(){
        let row = Math.floor((Math.random() * 4));
        let column = Math.floor((Math.random() * 4));
        // console.log(row);
        // console.log(column);
        if(this.board[row][column] == 0){
            this.board[row][column] = 2;
        }
    };

    renderBoardCell(cell){
        switch  (cell) {
            case 0 : return '<div class="game__cell"></div>';
            case 2: return `<div class="game__cell game__cell-two">2</div>`;
            case 4: return `<div class="game__cell game__cell-four">4</div>`;
            default : return `<div class="World__cell World__cell_wtf">A!</div>`;
        }
    };

    renderBoard() {
        return `
            ${this.board.map(row => `     
                ${row
                    .map((cell) => this.renderBoardCell(cell))
                    .join("")
                }
            `).join("")}
        `
    };

}

let game = new Game(document.body);

game.start();


let score = document.querySelector(".score");
score.innerHTML = "score: 0";


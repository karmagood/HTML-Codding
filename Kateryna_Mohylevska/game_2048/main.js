class Game {
    constructor(root_element) {
        this.root_element = root_element;
        this.board = Array(4)
            .fill()
            .map(() => new Array(4).fill(0));
        this.game = document.createElement('section');

        window.addEventListener("keydown", event => this.handleKeys(event));
    }

    start() {
        this.randomDigit();
        this.randomDigit();
        this.game.classList.add("game");
        this.root_element.appendChild(this.game);
        console.log(this.board);
        this.game.innerHTML = this.renderBoard();
    }

    handleKeys(ev) {
        switch (ev.keyCode) {
            case 39:
                this.moveToRight();
                break;
            case 37:
                this.moveToLeft();
                break;
            case 38:
                this.moveToTop();
                break;
            case 40:
                this.moveToBottom();
                break;
            default:
                return;
        }
    };

    moveToRight() {
        for (let row = 0; row < this.board.length; row++) {
            for (let cell = this.board.length - 2; cell > -1; cell--) {
                for (let k = cell; k < 4; k++) {
                    if (this.board[row][k] != 0) {
                        if (this.board[row][k + 1] == this.board[row][k]) {
                            this.move_row_cell(row, k, k + 1);
                        } else if (this.board[row][k + 1] == 0) {
                            this.move_row_cell(row, k, k + 1);
                        }
                    }
                }
            }
        }
        this.game.innerHTML = this.renderBoard();
        this.randomDigit();
    }

    moveToLeft() {
        for (let row = 0; row < this.board.length; row++) {
            for (let cell = 1; cell < 4; cell++) {
                for (let k = cell; k > 0; k--) {
                    if (this.board[row][k] != 0) {
                        if (this.board[row][k - 1] == this.board[row][k]) {
                            this.move_row_cell(row, k, k - 1);
                        } else if (this.board[row][k - 1] == 0) {
                            this.move_row_cell(row, k, k - 1);
                        }
                    }
                }
            }
        }
        this.game.innerHTML = this.renderBoard();
        this.randomDigit();
    }

    moveToTop() {
        for (let i = 1; i < 4; i++) {
            for (let row = i; row > 0; row--) {
                for (let k = 0; k < 4; k++) {
                    if (this.board[row][k] != 0) {
                        if (this.board[row - 1][k] == this.board[row][k]) {
                            this.move_column_cell(row, row - 1, k);
                        } else if (this.board[row - 1][k] == 0) {
                            this.move_column_cell(row, row - 1, k);
                        }
                    }
                }
            }
        }
        this.game.innerHTML = this.renderBoard();
        this.randomDigit();
    }

    moveToBottom() {
        for (let i = this.board.length - 2; i > -1; i--) {
            for (let row = i; row < this.board.length - 1; row++) {
                for (let k = 0; k < 4; k++) {
                    if (this.board[row][k] != 0) {
                        if (this.board[row + 1][k] == this.board[row][k]) {
                            this.move_column_cell(row, row + 1, k);
                        } else if (this.board[row + 1][k] == 0) {
                            this.move_column_cell(row, row + 1, k);
                        }
                    }
                }
            }
        }
        this.game.innerHTML = this.renderBoard();
        this.randomDigit();
    }


    move_row_cell(row, cell, place) {
        this.board[row][place] += this.board[row][cell];
        this.board[row][cell] = 0;
    }

    move_column_cell(from, to, cell) {
        this.board[to][cell] += this.board[from][cell];
        this.board[from][cell] = 0;
    }

    game_over() {
        for (let i = 0; i < 4; i++) {
            for (let k = 0; k < 4; k++) {
                if (this.board[i][k] == 0) {
                    return false;
                }
            }
        }
        alert("GAME OVER");
        return true;
    }

    randomDigit() {
        if (!this.game_over()) {
            while (true) {
                let row = Math.floor((Math.random() * 4));
                let column = Math.floor((Math.random() * 4));
                if (this.board[row][column] == 0) {
                    this.board[row][column] = 2;
                    return;
                }
            }
        }
    };

    renderBoardCell(cell) {
        if (cell == 0) {
            return '<div class="game__cell"></div>';
        }
        else {
            let cell_html = "<div class='game__cell game__cell-" + cell + "' >" + cell + "</div>";
            return cell_html;
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


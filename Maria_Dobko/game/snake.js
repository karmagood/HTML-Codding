
;(function () {

    var Game = function () {
        /***
         * Main function.
         * @type {CanvasRenderingContext2D|WebGLRenderingContext}
         */
        var screen = document.getElementById("screen").getContext('2d');

        this.size = {x: screen.canvas.width, y: screen.canvas.height};
        //this.center = { x: this.size.x / 2, y: this.size.y / 2 };
        this.block_size = 12;  // size of every square on the board
        this.speed = 50;
        var self = this;

        this.cells = [new Beginning(this)].concat(new Food(this,
            {x: Math.floor(this.size.x * Math.random()), y: Math.floor(this.size.y * Math.random())}));

        var tick = function () {
            self.latest();
            self.draw(screen);
            requestAnimationFrame(tick);   // movement
        };

        tick();
    };

    Game.prototype = {
        /**
         * All methods for Game are stored here.
         * latest: updates the board and checks collisions(is food eaten or not, for example)
         * draw:
         */
        latest: function () {
            for (let i = 0; i < this.cells.length; i++) {
                if (this.cells[i].latest !== undefined) {
                    this.cells[i].latest();
                }
            }
            checkCollisions(this.cells);
        },

        draw: function (screen) {
            screen.clearRect(0, 0, this.size.x, this.size.y);
            screen.strokeRect(0, 0, this.size.x, this.size.y);
            for (let i = 0; i < this.cells.length; i++) {
                if (this.cells[i].draw !== undefined) {
                    this.cells[i].draw(screen);
                }
            }
        },

        actionBody: function (body, action) {
            if (action === 'add') {
                this.cells.push(body);
            }
            else if (action === 'remove') {
                let index = this.cells.indexOf(body);
                if (index !== -1) {
                    this.cells.splice(index, 1);
                }
            }
        }

    };

    var checkCollisions = function (cells) {
        let pairs = [];
        // Find colliding pairs
        for (let i = 0; i < cells.length; i++) {
            for (let j = i + 1; j < cells.length; j++) {
                if (isColliding(cells[i], cells[j])) {
                    pairs.push([cells[i], cells[j]]);
                }
            }
        }

        for (let i = 0; i < pairs.length; i++) {
            if (pairs[i][1].collision !== undefined) {
                pairs[i][1].collision(pairs[i][0]);
            }
            if (pairs[i][0].collision !== undefined) {
                pairs[i][0].collision(pairs[i][1]);
            }
        }
    };

    var isColliding = function (obj1, obj2) {
        return !(obj1 === obj2 ||
            obj1.center.x + obj1.size.x / 2 <= obj2.center.x - obj2.size.x / 2 ||
            obj1.center.y + obj1.size.y / 2 <= obj2.center.y - obj2.size.y / 2 ||
            obj1.center.x - obj1.size.x / 2 >= obj2.center.x + obj2.size.x / 2 ||
            obj1.center.y - obj1.size.y / 2 >= obj2.center.y + obj2.size.y / 2
        );
    };

    // -----------------------------------------SNAKE-----------------------------------------------------------------

    var Beginning = function (game) {
        this.game = game;
        this.size = {x: this.game.block_size, y: this.game.block_size};
        this.center = {x: game.size.x / 2, y: game.size.y / 2};
        this.addblock = false;
        this.prevcenter = {x: 0, y: 0};
        this.lastMove = 0;

        this.keyboarder = new Keyboarder();
        this.velocity = {x: 0, y: 1};
        this.blocks = [];

    };

    Beginning.prototype = {
        latest: function () {
            var screenRect = {
                center: {x: this.game.size.x / 2, y: this.game.size.y / 2},
                size: this.game.size
            };

            if (!isColliding(this, screenRect)) {
                for (let i = 1; i < this.blocks.length; i++) {
                    this.game.actionBody(this.blocks[i], 'remove');
                }
                this.game.actionBody(this, 'remove');
            }

            if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
                if (this.velocity.x !== 1) {
                    this.velocity.x = -1;
                    this.velocity.y = 0;
                }
            } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
                if (this.velocity.x !== -1) {
                    this.velocity.x = 1;
                    this.velocity.y = 0;
                }
            } else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
                if (this.velocity.y !== 1) {
                    this.velocity.x = 0;
                    this.velocity.y = -1;
                }
            } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
                if (this.velocity.y !== -1) {
                    this.velocity.x = 0;
                    this.velocity.y = 1;
                }
            }

            var now = new Date().getTime();
            if (now > this.lastMove + this.game.speed) {
                this.lastMove = now;

                if (this.addblock === true) {
                    this.addBodyBlock();
                    this.addblock = false;
                }

                this.prevcenter.x = this.center.x;
                this.prevcenter.y = this.center.y;
                this.center.x += this.velocity.x * this.game.block_size;
                this.center.y += this.velocity.y * this.game.block_size;

                if (this.blocks.length >= 1) {
                    this.blocks[0].prevcenter.x = this.blocks[0].center.x;
                    this.blocks[0].prevcenter.y = this.blocks[0].center.y;
                    this.blocks[0].center.x = this.prevcenter.x;
                    this.blocks[0].center.y = this.prevcenter.y;


                    for (let i = 1; i < this.blocks.length; i++) {
                        this.blocks[i].prevcenter.x = this.blocks[i].center.x;
                        this.blocks[i].prevcenter.y = this.blocks[i].center.y;
                        this.blocks[i].center.x = this.blocks[i - 1].prevcenter.x;
                        this.blocks[i].center.y = this.blocks[i - 1].prevcenter.y;
                    }
                }
            }
        },

        addBodyBlock: function () {
            if (this.blocks.length > 0) {
                var center = this.blocks[this.blocks.length - 1].prevcenter;
            } else {
                var center = this.prevcenter;
            }
            block = new BodyBlock(this.game, this, center);
            this.blocks.push(block);
            this.game.actionBody(block, 'add');
        },

        draw: function (screen) {
            drawRect(screen, this, "black");
        },

        collision: function (otherBody) {
            if (otherBody instanceof Food) {
                this.addblock = true;
                createFood(this.game);
            } else if (otherBody instanceof BodyBlock) {
                for (var i = 0; i < this.blocks.length; i++) {
                    this.game.actionBody(this.blocks[i], 'remove')
                }
                this.game.actionBody(this, 'remove');
            }
        }
    };


    var drawRect = function (screen, body, col) {
        screen.fillStyle = col;
        screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2,
            body.size.x, body.size.y);
    };


    var Keyboarder = function () {
        var keyState = {};

        window.addEventListener('keydown', function (e) {
            keyState[e.keyCode] = true;
        });

        window.addEventListener('keyup', function (e) {
            keyState[e.keyCode] = false;
        });

        this.isDown = function (keyCode) {
            return keyState[keyCode] === true;
        };

        this.KEYS = {LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40};
    };

    var BodyBlock = function (game, head, center) {
        this.game = game;
        this.head = head;
        this.center = {x: center.x, y: center.y};
        this.prevcenter = {x: 0, y: 0};
        this.size = {x: this.game.block_size, y: this.game.block_size};
    };

    BodyBlock.prototype = {
        draw: function (screen) {
            drawRect(screen, this, "black");
        }
    };

    // -----------------------------------------FOOD-----------------------------------------------------------------

    var Food = function (game, center) {
        this.game = game;
        this.center = center;
        this.size = {x: this.game.block_size, y: this.game.block_size};
    };

    Food.prototype = {
        draw: function (screen) {
            drawRect(screen, this, "red");
        },

        latest: function () {
            var screenRect = {
                center: {x: this.game.size.x / 2, y: this.game.size.y / 2},
                size: this.game.size
            };
        },

        collision: function (otherBody) {
            this.game.actionBody(this, 'remove');
        }
    };

    var createFood = function (game) {
        food = new Food(game, {x: Math.floor(game.size.x * Math.random()), y: Math.floor(game.size.y * Math.random())});
        game.actionBody(food, 'add');
    };



    window.addEventListener('load', function () {
        new Game();
    });
})();

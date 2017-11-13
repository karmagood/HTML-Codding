var Game = Game || {};
var Keyboard = Keyboard || {};
var Component = Component|| {};

Keyboard.Keymap = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};


Keyboard.ControllerEvents = function() {
    var self = this;
    this.pressKey = null;
    this.keymap = Keyboard.Keymap;

    document.onkeydown = function(event) {
        self.pressKey = event.which;
    };

    this.getKey = function() {
        return this.keymap[this.pressKey];
    };
};


Component.Stage = function(canvas, cfg) {
    this.keyEvent = new Keyboard.ControllerEvents();
    this.width = canvas.width;
    this.height = canvas.height;
    this.length = [];
    this.food = {};
    this.score = 0;
    this.direction = 'right';
    this.cfg = {
        snake_size: 8,
        size: 5,
        fps: 1000
    };

    if (typeof cfg === 'object') {
        for (let key in cfg) {
            if (cfg.hasOwnProperty(key)) {
                this.cfg[key] = cfg[key];
            }
        }
    }

};


Component.Snake = function(canvas, cfg) {
    this.stage = new Component.Stage(canvas, cfg);
    this.initSnake = function() {
        for (let i = 0; i < this.stage.cfg.size; i++) {
            this.stage.length.push({x: i, y:0});
        }
    };
    this.initSnake();
    this.initFood = function() {
        this.stage.food = {
            x: Math.round(Math.random() * (this.stage.width - this.stage.cfg.snake_size) / this.stage.cfg.snake_size),
            y: Math.round(Math.random() * (this.stage.height - this.stage.cfg.snake_size) / this.stage.cfg.snake_size)
        };
    };

    this.initFood();

    this.restart = function() {
        this.stage.length = [];
        this.stage.food = {};
        this.stage.score = 0;
        this.stage.direction = 'right';
        this.stage.keyEvent.pressKey = null;
        this.initSnake();
        this.initFood();
    };
};


Game.Draw = function(context, snake) {

    this.drawStage = function() {
        var keyPress = snake.stage.keyEvent.getKey();
        if (typeof(keyPress) != 'undefined') {
            snake.stage.direction = keyPress;
        }

        context.fillStyle = "white";
        context.fillRect(0, 0, snake.stage.width, snake.stage.height);

        var nx = snake.stage.length[0].x;
        var ny = snake.stage.length[0].y;

        switch (snake.stage.direction) {
            case 'right':
                nx++;
                break;
            case 'left':
                nx--;
                break;
            case 'up':
                ny--;
                break;
            case 'down':
                ny++;
                break;
        }

        // TODO: make game restarting when baiting itself
        if (this.collision(nx, ny) == true) {
            snake.restart();
            return;
        }


        if (nx === snake.stage.food.x && ny === snake.stage.food.y) {
            var tail = {x: nx, y: ny};
            snake.stage.score++;
            snake.initFood();
        }
        else {
            tail = snake.stage.length.pop();
            tail.x = nx;
            tail.y = ny;
        }
        snake.stage.length.unshift(tail);

        for (let i = 0; i < snake.stage.length.length; i++) {
            var cell = snake.stage.length[i];
            this.drawCell(cell.x, cell.y);
        }

        this.drawCell(snake.stage.food.x, snake.stage.food.y);

        context.fillText('Score: ' + snake.stage.score, 5, (snake.stage.height - 5));
    };

    this.drawCell = function(x, y) {
        context.fillStyle = 'rgb(0, 255, 0)';
        context.beginPath();
        context.arc((x * snake.stage.cfg.snake_size + 6), (y * snake.stage.cfg.snake_size + 6), 4, 0, 2 * Math.PI, false);
        context.fill();
    };

    this.collision = function(nx, ny) {
        if (nx === -1 || nx === (snake.stage.width / snake.stage.cfg.snake_size) || ny === -1 || ny === (snake.stage.height / snake.stage.cfg.snake_size)) {
            return true;
        }
        return false;
    }
};


Game.Snake = function(elementId, cfg) {
    var canvas = document.getElementById(elementId);
    var context = canvas.getContext("2d");
    var snake = new Component.Snake(canvas, cfg);
    var gameDraw = new Game.Draw(context, snake);
    setInterval(function() {gameDraw.drawStage();}, snake.stage.cfg.fps);
};


window.onload = function() {
    var snake = new Game.Snake('stage', {fps: 100, size: 1});
};
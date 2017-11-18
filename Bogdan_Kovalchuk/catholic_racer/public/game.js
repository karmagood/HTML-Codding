/**
 * @file Game in html dom
 * @author Bogdan Kovalchuk <bogdanleblank@ukr.net>
 * @version 0.1
 */

(function () {
    'use strict';

    /**
     *
     * Class representing a cell
     */
    class Cell {
        /**
         *
         * Creates cell
         *
         * @param {object} args - contains information for creating cell
         */
        constructor(args) {
            let _coords;

            _coords = args.coords || {
                    x: 0,
                    y: 0
                };

            /**
             *
             * Getter that returns coordinates of cell
             *
             * @return {object} - coordinates of cell
             */
            this.getCoords = () => {
                return _coords;
            };

            /**
             *
             * Setter for coordinates of cell
             *
             * @param {object} coords
             */
            this.setCoords = (coords) => {
                _coords = coords;
            };
        }

        /**
         *
         * Compare coordinates of two inctances of class Cell
         *
         * @param {Cell} cell1 - instance of class Cell
         * @param {Cell} cell2 - instance of class Cell
         * @return {boolean} - the result of comparison
         */
        static compareCoords(cell1, cell2) {
            let coords1 = cell1.getCoords(),
                coords2 = cell2.getCoords();
            return coords1.x === coords2.x && coords1.y === coords2.y
        }

    }

    /**
     *
     * Class representing a unit
     *
     * @extends Cell
     */
    class Unit extends Cell {
        /**
         *
         * Creates unit
         *
         * @param {object} args - contains information for creating unit
         */
        constructor(args) {
            super(args);
            let _speed;

            _speed = args.speed || 100;
        }
    }

    /**
     *
     * Class representing a player
     *
     * @extends Unit
     */
    class Player extends Unit {

        /**
         *
         * Creates player
         *
         * @param {Array} world - structure that contains all coordinates of all cell
         * @param {object} args
         */
        constructor(world, args) {
            args = args || {};

            /**
             *
             * Calculate coordinates in the center of world to locate player
             *
             * @param {Array} world - structure that contains all coordinates of all cell
             * @return {object} - coordinates to locate player
             */
            const findCoords = (world) => {
                let x_start, x_end, y_start, y_end;
                x_start = y_start = world.length * 0.3;
                x_end = y_end = world.length * 0.7;
                for (let i = y_start; i < y_end; i++) {
                    for (let j = x_start; j < x_end; j++) {
                        if (world[i][j] === GameMeta.cell.road)
                            return {
                                x: j,
                                y: i
                            };
                    }
                }
            };

            args.coords = findCoords(world);
            super(args);

            let _isOnBlock = false;


            /**
             *
             * Setter for _isonBlock variable
             *
             * @param {boolean} state - whether player on block or not
             */
            this.onBlock = (state) => {
                _isOnBlock = state;
            };

            /**
             *
             * Getter that return whether player on block
             *
             * @return {boolean} - whather player on block or not
             */
            this.isOnBlock = () => {
                return _isOnBlock;
            }
        }

        /**
         *
         * Check and calculates new coordinates for player
         *
         * @param {Array} world - structure that contains all coordinates of all cell
         * @param {string} direction - direction in witch player has been moved
         * @return {object} - new coordinates of player
         */
        move(world, direction) {
            let temp_x = this.getCoords().x;
            let temp_y = this.getCoords().y;
            switch (direction) {
                case 'ArrowUp':
                    temp_y--;
                    break;
                case 'ArrowDown':
                    temp_y++;
                    break;
                case 'ArrowLeft':
                    temp_x--;
                    break;
                case 'ArrowRight':
                    temp_x++;
                    break;
                default:
                    break;
            }
            if (temp_x > -1 && temp_y > -1 && temp_x < world.length && temp_y < world.length) {
                let cellType = world[temp_y][temp_x];
                if (cellType !== GameMeta.cell.wall && cellType !== GameMeta.cell.enemy) {
                    this.setCoords({x: temp_x, y: temp_y});
                }
            }
            return this.getCoords();
        }

        /**
         * Add fuel to player
         */
        addFuel(){
            console.log("Fuel added")
        }

    }

    class Enemy extends Unit {
        constructor(world, args) {
            args = args || {};

            const findCoords = (world) => {
                let x_start, x_end, y_start, y_end;
                switch (GameFacilities.random(1, 4)) {
                    case 1:
                        x_start = y_start = 0;
                        x_end = y_end = world.length * 0.3;
                        break;
                    case 2:
                        x_start = world.length * 0.7;
                        x_end = world.length;
                        y_start = 0;
                        y_end = world.length * 0.3;
                        break;
                    case 3:
                        x_start = 0;
                        x_end = world.length * 0.3;
                        y_start = world.length * 0.7;
                        y_end = world.length;
                        break;
                    case 4:
                        x_start = y_start = world.length * 0.7;
                        x_end = y_end = world.length;
                        break;
                    default:
                        break;
                }
                for (let i = y_start; i < y_end; i++) {
                    for (let j = x_start; j < x_end; j++) {
                        if (world[i][j] === GameMeta.cell.road)
                            return {
                                x: j,
                                y: i
                            };
                    }
                }
                return findCoords(world); // !!! posiable infinite recursion for small map and large num of enemies

            };

            args.coords = findCoords(world);
            super(args);

        }

        randomMove(world) {
            let posiableCoords = [];

            const check = (temp_x, temp_y) => {
                if (temp_x > -1 && temp_y > -1 && temp_x < world.length && temp_y < world.length) {


                    if (world[temp_y][temp_x] !== GameMeta.cell.wall &&
                        world[temp_y][temp_x] !== GameMeta.cell.block &&
                        world[temp_y][temp_x] !== GameMeta.cell.enemy) {
                        posiableCoords.push({x: temp_x, y: temp_y});
                    }
                }
            };

            for (let i = -1; i < 2; i++) {
                check(this.getCoords().x + i, this.getCoords().y);
                check(this.getCoords().x, this.getCoords().y + i);
            }
            if(posiableCoords.length === 0)
                return this.getCoords();

            let choice = posiableCoords[GameFacilities.random(0, posiableCoords.length - 1)];
            this.setCoords(choice);
            return choice;
        }

        move(world) {
            //TODO some A* or other algo

            return this.randomMove(world);
        }

    }

    /**
     *  Class representing a Block
     *
     *  @extends Cell
     */
    class Block extends Cell {
        constructor(coords) {
            let args = {coords: coords};
            super(args);
            let _time = 5000;

            this.reduceTime = (dec) => {
                _time -= dec;
                return _time
            };

            this.getLeftTime = () => {
                return _time;
            };
        }
    }

    /**
     *
     * Class representing a Fuel
     *
     * @extends Cell
     */
    class Fuel extends Cell{
        constructor(world, args){
            args = args || {};

            let findCoords = (world) =>{
                while(true){
                    let temp_y = GameFacilities.random(0, world.length-1);
                    let temp_x = GameFacilities.random(0, world.length-1);
                    if(world[temp_y][temp_x] === GameMeta.cell.road)
                        return {x: temp_x, y: temp_y};
                }

            };
            args.coords = findCoords(world);
            super(args);
        }
    }



    let GameMeta = {
        cell: {
            road: 0,
            wall: 1,
            enemy: 2,
            player: 3,
            block: 4,
            fuel: 5
        }
    };

    class GameFacilities {
        /**
         *
         * Concatenate two strings
         *
         * @param {string} accumulator - concatenated string of previous sting
         * @param {string} elem -
         * @return {string} - concatenated string
         */
        static reduce(accumulator, elem) {
            return accumulator + elem;
        }

        /**
         *
         * Find css class for cell
         *
         * @param {number} elem - type of cell
         * @return {string} - html tag with nested tags
         */
        static rowMap(elem) {
            let className;
            switch (elem) {
                case GameMeta.cell.road:
                    className = "playground__cell--road";
                    break;
                case GameMeta.cell.player:
                    className = "playground__cell--player";
                    break;
                case GameMeta.cell.wall:
                    className = "playground__cell--wall";
                    break;
                case GameMeta.cell.enemy:
                    className = "playground__cell--enemy";
                    // className = "playground__cell--player";
                    break;
                case GameMeta.cell.fuel:
                    className = "playground__cell--fuel";
                    break;
                case GameMeta.cell.block:
                    className = "playground__cell--block";
                    break;

                default:
                    break;
            }
            return `<div class="playground__cell ${className}"></div>`;

        }

        /**
         *
         * Transform world row into html
         *
         * @param {Array} elem - row of world
         * @return {string} - html row
         */
        static worldMap(elem) {
            let rowContent = elem
                .map(GameFacilities.rowMap)
                .reduce(GameFacilities.reduce);
            return `<div class="playground__row">${rowContent}</div>`;
        }

        /**
         *
         * Give random number from range
         *
         * @param {number} min - from that number including
         * @param {number} max - to that number including
         * @return {number} - arbitrary number from range
         */
        static random (min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
    }
    class Game {
        constructor(args) {
            let _size = args.size || 10;
            let _enemiesNumber = args.enemiesNumber || 4;
            let _enemiesPower = args.enemiesPower || 3;
            let _fuelsNumber = args.fuelsNumber || 2;
            let _world, _enemies, _player, _blocks = [], _fuels;
            let _lastMovements = {direction: null, supplier: null};
            let _interval, _clockInterval;
            let _time = 0;
            let _score = 0;

            _world = new Array(_size).fill().map(() => {
                return new Array(_size).fill(0);
            });
            _world = this.addWall(_world);

            _enemies = new Array(_enemiesNumber).fill().map(() => {
                let enemy = new Enemy(_world);
                _world[enemy.getCoords().y][enemy.getCoords().x] = GameMeta.cell.enemy;
                return enemy;
            });

            _player = new Player(_world);
            _world[_player.getCoords().y][_player.getCoords().x] = GameMeta.cell.player;

            _fuels = new Array(_fuelsNumber).fill().map(() => {
                let fuel = new Fuel(_world);
                _world[fuel.getCoords().y][fuel.getCoords().x] = GameMeta.cell.fuel;
                return fuel;
            });

            console.log(_world);

            /*
             Methods that work with private data
             */
            this.setInterval = (callback, time) => {
                _interval = setInterval(callback, time);
            };

            this.getInterval = () => {
                return _interval;
            };

            this.setClock = (callback, time) => {
                _clockInterval = setInterval(callback, time);
            };

            this.getTime = () =>{
                return _time;
            };
            this.addTime = () => {
                _time += 1;
            };

            this.getClock = () => {
                return _clockInterval;
            };

            this.getWorld = () => {
                return _world;
            };

            this.getEnemies = () => {
                return _enemies;
            };

            this.getPlayer = () => {
                return _player;
            };

            this.getLastMovements = () => {
                return _lastMovements;
            };

            this.moveEnemies = () => {
                _enemies = _enemies.map((enemy) => {
                    let oldCoords = enemy.getCoords(),
                        newCoords = enemy.move(_world);
                    if( _world[newCoords.y][newCoords.x] === GameMeta.cell.fuel){
                        this.updateFuels(newCoords);
                        this.addScore(-10);
                    }
                    _world[oldCoords.y][oldCoords.x] = GameMeta.cell.road;
                    _world[newCoords.y][newCoords.x] = GameMeta.cell.enemy;
                    return enemy;
                });
            };

            this.movePlayer = (oldCoords, newCoords, isOnBlock) => {
                // if old coords not equal to new coords, then player was moved
                if (newCoords.x !== oldCoords.x || newCoords.y !== oldCoords.y) {

                    if (isOnBlock) {
                        console.log("onBlock");
                        _world[oldCoords.y][oldCoords.x] = GameMeta.cell.block;
                        _player.onBlock(false);
                    }
                    else
                        _world[oldCoords.y][oldCoords.x] = GameMeta.cell.road;

                    if (_world[newCoords.y][newCoords.x] === GameMeta.cell.block)
                        _player.onBlock(true);
                    if(_world[newCoords.y][newCoords.x] === GameMeta.cell.fuel){
                        _player.addFuel();
                        this.updateFuels(newCoords);
                        this.addScore(10);
                    }

                }

                _world[newCoords.y][newCoords.x] = GameMeta.cell.player;
            };

            this.addLastMovements = (movement) => {
                _lastMovements[movement.type] = movement.val;
            };

            this.addBlock = () => {
                let tempBlock = _blocks.find((block) => {  // check whether block with player coordinates already exist
                    return Cell.compareCoords(block, _player);
                });
                if (!tempBlock)  // if not exist, add block
                    _blocks.push(new Block(Object.assign({}, _player.getCoords())));
            };


            this.updateBlocks = () => {
                _blocks = _blocks.filter((block) => { // filter block that will be exist after this interval iteration
                    let cellType = _world[block.getCoords().y][block.getCoords().x];
                    if (block.reduceTime(100) < 0) { // block time is out
                        if (Cell.compareCoords(block, _player)) // if player at the time on this block
                            _player.onBlock(false);
                        if (cellType === GameMeta.cell.block) // if depicted block, replace it with road
                            _world[block.getCoords().y][block.getCoords().x] = GameMeta.cell.road;
                        return false;
                    }
                    return true;
                });

            };

            this.updateFuels = (newCoords) => {
                _fuels = _fuels.filter((fuel) =>{
                    return fuel.getCoords().x !== newCoords.x && fuel.getCoords().y !== newCoords.y;
                });
                this.addFuel();
            };

            this.addFuel = () =>{
                let fuel = new Fuel(_world);
                _world[fuel.getCoords().y][fuel.getCoords().x] = GameMeta.cell.fuel;
                _fuels.push(fuel);
            };

            this.addScore = (inc) => {
                _score+=inc;
            };

            this.updateScore = () => {
                document.getElementById('score').innerHTML = _score;
            };

        }

        /**
         *
         * Add walls to the world
         *
         * @param {Array} world - world without wall
         * @return {Array} world - world with adding wall
         */
        addWall(world) {
            world = world.map((item, index) => {
                if (index % 2 === 0) {
                    let gap, block;
                    gap = GameFacilities.random(0, 2);
                    block = GameFacilities.random(3, 4);
                    item = item.map((cell) => {
                        if (gap > 1) {
                            gap--;
                        } else if (block > 0) {
                            cell = GameMeta.cell.wall;
                            block--;
                        } else {
                            gap = GameFacilities.random(0, 2);
                            block = GameFacilities.random(3, 4);
                        }
                        return cell;
                    });
                }
                return item;
            });
            return world;
        }

        /**
         *
         * Set event listeners on keyboard clicks
         */
        initControls() {
            document.addEventListener('keydown', (event) => {
                if (event.code.indexOf('Arrow') !== -1)
                    this.addLastMovements({type: 'direction', val: event.code});
                if (event.code === 'Space')
                    this.addLastMovements({type: 'supplier', val: event.code});
            });
        }

        /**
         *
         * Move enemies, player, add/remove blocks and fuel
         */
        calculate() {
            if (this.getLastMovements().supplier) {
                this.addBlock();
                this.getPlayer().onBlock(true);
                this.addLastMovements({type: 'supplier', val: null}); // reset last movement for supplier
            }

            this.movePlayer(this.getPlayer().getCoords(), this.getPlayer().move(this.getWorld(), this.getLastMovements().direction), this.getPlayer().isOnBlock());
            this.addLastMovements({type: 'direction', val: null}); // reset last movement for direction

            this.updateBlocks();

            this.moveEnemies();
        }

        /**
         *
         */
        clock(){ // TODO refactor clock create  separate class
            this.setClock(()=>{
                this.addTime();
                let hour, min, sec;
                let time = this.getTime();
                hour = Math.floor(time / 3600);
                min = Math.floor(time / 60 - hour * 60);
                sec = time - hour * 3600 - min * 60;
                hour = hour.toString().length > 1? hour: `0${hour}`;
                min = min.toString().length > 1? min: `0${min}`;
                sec = sec.toString().length > 1? sec: `0${sec}`;
                document.getElementById('time').innerHTML = `${hour}:${min}:${sec}`;
            }, 1000);
        }

        /**
         *
         */
        render() {
            let playground = document.getElementsByClassName('playground')[0];
            playground.innerHTML = this.getWorld()
                .map(GameFacilities.worldMap)
                .reduce(GameFacilities.reduce);
        }

        /**
         *
         */
        isOver(){
            let enemy = this.getEnemies().find((enemy)=>{
                return Cell.compareCoords(enemy, this.getPlayer())
            });
            return !!enemy; // convert to boolean
        }

        /**
         *
         */
        start() {
            this.render();
            this.initControls();
            this.setInterval(() => {
                this.calculate();
                this.render();
                this.updateScore();
                if(this.isOver())
                    this.stop();
            }, 250);
            this.clock();
        }

        /**
         *
         */
        stop() {
            clearInterval(this.getInterval());
            clearInterval(this.getClock())
        }
    }

    let game = new Game({
        size: 20,
        enemiesNumber: 4,
        enemiesPower: 3
    });

    game.start();
}());

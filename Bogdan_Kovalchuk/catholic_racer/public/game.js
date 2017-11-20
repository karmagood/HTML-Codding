/**
 * @file Game in html dom
 * @author Bogdan Kovalchuk <bogdanleblank@ukr.net>
 * @version 0.1
 */

(function () {
    'use strict';

    window.mobilecheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

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
                case 'up':
                    temp_y--;
                    break;
                case 'down':
                    temp_y++;
                    break;
                case 'left':
                    temp_x--;
                    break;
                case 'right':
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
                        world[temp_y][temp_x] !== GameMeta.cell.enemy &&
                        world[temp_y][temp_x] !== GameMeta.cell.enemy_from_bottom &&
                        world[temp_y][temp_x] !== GameMeta.cell.enemy_from_left &&
                        world[temp_y][temp_x] !== GameMeta.cell.enemy_from_top &&
                        world[temp_y][temp_x] !== GameMeta.cell.enemy_from_right) {
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
            enemy_from_top: 21,
            enemy_from_right: 22,
            enemy_from_bottom: 23,
            enemy_from_left: 24,
            player: 3,
            player_from_top: 31,
            player_from_right: 32,
            player_from_bottom: 33,
            player_from_left: 34,
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
                case GameMeta.cell.enemy:
                    className = "playground__cell--enemy";
                    break;
                case GameMeta.cell.enemy_from_top:
                    className = "playground__cell--enemy playground__cell--enemy-from-top";
                    break;
                case GameMeta.cell.enemy_from_right:
                    className = "playground__cell--enemy playground__cell--enemy-from-right";
                    break;
                case GameMeta.cell.enemy_from_bottom:
                    className = "playground__cell--enemy playground__cell--enemy-from-bottom";
                    break;
                case GameMeta.cell.enemy_from_left:
                    className = "playground__cell--enemy playground__cell--enemy-from-left";
                    break;
                case GameMeta.cell.player:
                    className = "playground__cell--player";
                    break;
                case GameMeta.cell.player_from_top:
                    className = "playground__cell--player playground__cell--player-from-top";
                    break;
                case GameMeta.cell.player_from_right:
                    className = "playground__cell--player playground__cell--player-from-right";
                    break;
                case GameMeta.cell.player_from_bottom:
                    className = "playground__cell--player playground__cell--player-from-bottom";
                    break;
                case GameMeta.cell.player_from_left:
                    className = "playground__cell--player playground__cell--player-from-left";
                    break;
                case GameMeta.cell.wall:
                    className = "playground__cell--wall";
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
            let _enemiesNumber = args.enemiesNumber|| 4;
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

            this.addEnemy = () => {
                _enemies.push(new Enemy(_world));
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
                        // this.addScore(-10);
                    }
                    _world[oldCoords.y][oldCoords.x] = GameMeta.cell.road;
                    if(newCoords.y > oldCoords.y)
                        _world[newCoords.y][newCoords.x] = GameMeta.cell.enemy_from_top;
                    else if(newCoords.y < oldCoords.y)
                        _world[newCoords.y][newCoords.x] = GameMeta.cell.enemy_from_bottom;
                    else if(newCoords.x > oldCoords.x)
                        _world[newCoords.y][newCoords.x] = GameMeta.cell.enemy_from_left;
                    else if(newCoords.x < oldCoords.x)
                        _world[newCoords.y][newCoords.x] = GameMeta.cell.enemy_from_right;
                    else
                        _world[newCoords.y][newCoords.x] = GameMeta.cell.enemy;
                    return enemy;
                });
            };

            this.movePlayer = (oldCoords, newCoords, isOnBlock, direction) => {
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

                    switch (direction) {
                        case 'up':
                            _world[newCoords.y][newCoords.x] = GameMeta.cell.player_from_bottom;
                            break;
                        case 'down':
                            _world[newCoords.y][newCoords.x] = GameMeta.cell.player_from_top;
                            break;
                        case 'left':
                            _world[newCoords.y][newCoords.x] = GameMeta.cell.player_from_right;
                            break;
                        case 'right':
                            _world[newCoords.y][newCoords.x] = GameMeta.cell.player_from_left;
                            break;
                        default:
                            break;
                    }
                    return true;
                } else{
                    _world[newCoords.y][newCoords.x] = GameMeta.cell.player;
                }
                return false;

            };

            this.addLastMovements = (movement) => {
                if(movement.type === 'direction')
                    _lastMovements['prevDirection'] = _lastMovements['direction']?_lastMovements['direction']: null;
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
                    if (block.reduceTime(150) < 0) { // block time is out
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
             this.getScore = () => {
                return _score;
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
                    this.addLastMovements({type: 'direction', val: event.code.split('Arrow')[1].toLowerCase()});
                if (event.code === 'Space')
                    this.addLastMovements({type: 'supplier', val: event.code});
            });
        }

        /**
         * Set event listeners on mobile swipes
         */
        initMobileControls() {
            let buttons = document.getElementsByClassName('controllers__button');
            // console.log(buttons);
            for(let i  = 0; i < buttons.length; i++){
                buttons[i].addEventListener('click', (event) => {
                    if(event.target.dataset.value === 'space')
                        this.addLastMovements({type: 'supplier', val: 'space'});
                    else
                        this.addLastMovements({type: 'direction', val: event.target.dataset.value});
                });
            }
            // buttons.forEach((button) => {
            //     button.addEventListener('click', (event) => {
            //         if(event.target.dataset.value === 'space')
            //             this.addLastMovements({type: 'supplier', val: 'space'});
            //         else
            //             this.addLastMovements({type: 'direction', val: event.target.dataset.value});
            //
            //     })
            // })
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

            let isMoved = this.movePlayer(this.getPlayer().getCoords(), this.getPlayer().move(this.getWorld(),
                this.getLastMovements().direction), this.getPlayer().isOnBlock(), this.getLastMovements().direction);
            if(!isMoved){
                this.movePlayer(this.getPlayer().getCoords(), this.getPlayer().move(this.getWorld(),
                    this.getLastMovements().prevDirection), this.getPlayer().isOnBlock(),this.getLastMovements().prevDirection);
            } else{
                this.addLastMovements({type: 'prevDirection', val: this.getLastMovements().direction});  // reset last movement for direction
            }

            if(Math.floor(this.getScore()/40) === this.getEnemies().length-3)
                this.addEnemy();

            if(this.isOver())
                this.stop();

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
            if(mobilecheck())
                this.initMobileControls();
            else
                this.initControls();
            this.setInterval(() => {
                this.calculate();
                this.render();
                this.updateScore();
                if(this.isOver())
                    this.stop();
            }, 150);
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


    window.onload = () => {
        let gameConfig;

        if(mobilecheck()){
            gameConfig = {
                size: 10,
                enemiesNumber: 4
            };
        } else{
            gameConfig = {
                size: 20,
                enemiesNumber: 4
            };
        }

        let game = new Game(gameConfig);

        game.start();
    }

}());

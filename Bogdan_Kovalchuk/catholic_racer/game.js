(function () {
    'use strict';
    class Unit {
        constructor(args) {
            let _speed, _coords;

            _speed = args.speed || 100;
            _coords = args.coords || {
                    x: 0,
                    y: 0
                };

            this.getCoords = () => {
                return _coords;
            };
            this.setCoords = (coords) => {
                _coords = coords;
            };
        }
    }

    class Player extends Unit {
        constructor(world, args) {
            args = args || {};

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

            this.onBlock = (state) => {
                _isOnBlock = state;
            };
        }

    }

    class Enemy extends Unit {
        constructor(world, args) {
            args = args || {};
            const random = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min);
            };
            const findCoords = (world) => {
                let x_start, x_end, y_start, y_end;
                switch (random(1, 4)) {
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
                        y_start = world.length * 0.7
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
                return findCoords(world); // !!! posiable requrtion

            };

            args.coords = findCoords(world);
            super(args);

        }

        move(world) {
            //TODO some A* or other algo
            return this.getCoords();
        }

    }

    class Block {

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
        static reduce(accumulator, elem) {
            return accumulator + elem;
        }

        static rowMap(elem) {
            let className;
            switch (elem) {
                case GameMeta.cell.road:
                    className = "playground__cell--road";
                    break;
                default:
                    break;
            }
            return `<div class="playground__cell ${className}"></div>`;

        }

        static worldMap(elem) {
            let rowContent = elem
                .map(GameFacilities.rowMap)
                .reduce(GameFacilities.reduce);
            return `<div class="playground__row">${rowContent}</div>`;
        }
    }
    class Game {

        constructor(args) {
            let _size = args.size || 10;
            let _enemiesNumber = args.enemiesNumber || 4;
            let _enemiesPower = args.enemiesPower || 3;
            let _world, _enemies, _player, _blocks, _fuels;
            let lastMovements;

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

            console.log(_world);
            /*

             */

            this.getWorld = () => {
                return _world;
            };

            this.getEnemies = () => {
                return _enemies;
            };

            this.moveEnemy = (oldCoords, newCoords) => {
                _world[oldCoords.y][oldCoords.x] = GameMeta.cell.road;
                _world[newCoords.y][newCoords.x] = GameMeta.cell.enemy;
            };

            this.movePlayer = (oldCoords, newCoords, isOnBlock) => {
                if (isOnBlock)
                    _world[oldCoords.y][oldCoords.x] = GameMeta.cell.block;
                else
                    _world[oldCoords.y][oldCoords.x] = GameMeta.cell.road;

                _world[newCoords.y][newCoords.x] = GameMeta.cell.player;
            };

            this.addLastMovements = (movement) => {
                lastMovements[movement.type] = movement.val;
            };

            this.updateBlocks = () => {
                _blocks = _blocks.filter((block) => {
                    let cellType = _world[block.getCoords().y][block.getCoords().x];
                    if (block.reduceTime(100) < 0) {
                        if (cellType === GameMeta.cell.block)
                            _world[block.getCoords().y][block.getCoords().x] = GameMeta.cell.road;
                        return false;
                    }
                    return true;
                });

            };

        }

        addWall(wall) {
            const random = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min)
            };

            wall = wall.map((item, index) => {
                if (index % 2 === 0) {
                    let gap, block;
                    gap = random(0, 2);
                    block = random(3, 4);
                    item = item.map((cell) => {
                        if (gap > 1) {
                            gap--;
                        } else if (block > 0) {
                            cell = GameMeta.cell.wall;
                            block--;
                        } else {
                            gap = random(0, 2);
                            block = random(3, 4);
                        }
                        return cell;
                    });
                }
                return item;
            });
            return wall;
        }

        calculate() {
            this.getEnemies().forEach((enemy) => {
                this.moveEnemy(enemy.getCoords(), enemy.move(this.getWorld()))
            });

            this.movePlayer(this.getPlayer().getCoords(), this.getPlayer().move(this.getLastMovements().direction));
            this.updateBlocks();
        }

        render() {
            let playground = document.getElementsByClassName('playground')[0];
            let playgroundContent = this.getWorld()
                .map(GameFacilities.worldMap)
                .reduce(GameFacilities.reduce);
            playground.innerHTML = playgroundContent;
        }


        start() {
            this.render();
            this.calculate();
            //            const interval = setInterval(() => {
            //                this.calculate();
            //                this.render();
            //            }, 100);
        }
    }

    let game = new Game({
        size: 10,
        enemiesNumber: 4,
        enemiesPower: 3
    });
    game.start();
}())

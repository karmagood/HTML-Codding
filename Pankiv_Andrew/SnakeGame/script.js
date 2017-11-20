//settings
let SnakeX = 2;
let SnakeY = 2;
let Height = 30;
let Width = 30;
let interval = 150;
let growth = 2;

//game variables
let length = 0;
let TailX = [SnakeX];
let TailY = [SnakeY];
let FruitX;
let FruitY;
let Running = false;
let GameOver = false;
let WallKill = false;
let ChangePortals = false;
let direction = 2;// up = 8 , down = 2, right = 6, left = 4
let Inter;
let Timer;
let Seconds = 10;
let Score = 0;
let BestScore = 0;
let Beginning = true;
let PortalPositions = [[[13, 0], [14, 0], [15, 0], [16, 0]],
    [[13, 29], [14, 29], [15, 29], [16, 29]],
    [[0, 13], [0, 14], [0, 15], [0, 16]],
    [[29, 13], [29, 14], [29, 15], [29, 16]]];


function Run() {
    Init();
    Inter = setInterval(GameLoop, interval);
    Timer = setInterval(PortalTime, 1000);

}

function Reset() {
    DeleteSnake();
    clearInterval(Inter);
    RebuildMap();
    ReCreatePortals();
    Score = 0;
    document.getElementById("score").innerHTML = '' + Score;
    length = 0;
    SnakeX = 2;
    SnakeY = 2;
    Beginning = true;
    interval = 150;
    TailX = [SnakeX];
    TailY = [SnakeY];
    GameOver = false;
    WallKill = false;
    Running = false;
    CreateSnake();
    Inter = setInterval(GameLoop, interval);

}

function Init() {
    CreateMap();
    CreateSnake();
    CreateFruit();
    ReCreatePortals();
}

/**
 * @return {boolean}
 */
function InPortalPositions(x, y) {
    if (x !== undefined && y !== undefined) {
        return GetType(x, y) === "portal";
    }

}

function CreateMap() {
    document.write("<table name='table'>");
    for (let y = 0; y < Height; y++) {
        document.write("<tr>");
        for (let x = 0; x < Width; x++) {
            if ((x === 0 || x === Width - 1 || y === 0 || y === Height - 1)) {
                document.write("<td class='wall' id='" + x + "-" + y + "'></td>");
            } else {
                document.write("<td class='blank' id='" + x + "-" + y + "'></td>");
            }
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

function RebuildMap() {
    if (WallKill) {
        Set(SnakeX, SnakeY, "wall");
    }

}

function CreateSnake() {
    Set(SnakeX, SnakeY, "snake");
}

function ReCreatePortals() {
    for (let line = 0; line < PortalPositions.length; line++) {
        if (ChangePortals) {
            for (let position = 0; position < PortalPositions[line].length; position++) {
                if (line < 2) {
                    Set(PortalPositions[line][position][0], PortalPositions[line][position][1], "portal");
                } else {
                    Set(PortalPositions[line][position][0], PortalPositions[line][position][1], "wall");
                }
            }
        }
        else if (!ChangePortals) {
            for (let position = 0; position < PortalPositions[line].length; position++) {
                if (line > 1) {
                    Set(PortalPositions[line][position][0], PortalPositions[line][position][1], "portal");
                }
                else {
                    Set(PortalPositions[line][position][0], PortalPositions[line][position][1], "wall");
                }
            }
        }
    }
    ChangePortals = !ChangePortals;
}

function PortalTime() {
    if (Seconds < 0) {
        Seconds = 10;
    }
    document.getElementById("timer").innerHTML = "Seconds to switch portals: " + Seconds;
    if (Seconds === 0) {
        ReCreatePortals();
    }
    Seconds--;
}

function DeleteSnake() {
    for (let i = 0; i < length; i++) {
        Set(TailX[i], TailY[i], "blank");
    }
    Set(SnakeX, SnakeY, "blank");
}

function Get(x, y) {
    return document.getElementById(x + "-" + y);
}


function Set(x, y, value) {
    if (x !== undefined && y !== undefined) {
        Get(x, y).setAttribute("class", value);
    }
}

/**
 * @return {string}
 */
function GetType(x, y) {
    return Get(x, y).getAttribute("class");
}


function CreateFruit() {
    while (length < (Width - 2) * (Height - 2) + 1) {
        FruitX = Math.floor((Math.random() * (Width - 1)) + 1);
        FruitY = Math.floor((Math.random() * (Height - 1)) + 1);
        if (GetType(FruitX, FruitY) === "blank") {
            Set(FruitX, FruitY, "fruit");
            break;
        }

    }
}

window.addEventListener("keydown", function key() {
    let key = window.event.keyCode;
    if (!Running) {
        Running = true;
    }
    console.log(key);
    sleep(20);
    switch (key) {
        case 37:
            if (direction !== 6 || Beginning) {
                direction = 4;
            }
            break;
        case 38:
            if (direction !== 2 || Beginning) {
                direction = 8;
            }
            break;
        case 39:
            if (direction !== 4 || Beginning) {
                direction = 6;
            }
            break;

        case 40:
            if (direction !== 8 || Beginning) {
                direction = 2;
            }
            break;
        case 32:
            Running = false;
            break;
        case 13:
            Reset();
            break;
    }
});

function GameLoop() {
    if (Running && !GameOver) {
        Update();
    }
    else if (GameOver) {
        clearInterval(Inter);
    }
}

function sleep(milliseconds) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function Update() {
    Set(FruitX, FruitY, "fruit");
    UpdateTail();
    if (!InPortalPositions(TailX[length], TailY[length])) {
        Set(TailX[length], TailY[length], "blank");
    }


    switch (direction) {
        case 4:
            SnakeX--;
            break;
        case 8:
            SnakeY--;
            break;
        case 6:
            SnakeX++;
            break;
        case 2:
            SnakeY++;
            break;
    }

    if (GetType(SnakeX, SnakeY) === "wall") {
        sleep(100);
        WallKill = true;
        GameOver = true;
        document.getElementById("last-score").innerHTML = "Last score : " + Score;
        Reset();
    }
    if (!InPortalPositions(SnakeX, SnakeY) && !WallKill) {
        Set(SnakeX, SnakeY, "snake");
    }
    if (InPortalPositions(SnakeX, SnakeY)) {
        if (SnakeY === 0) {
            SnakeY = 29;
        } else if (SnakeY === 29) {
            SnakeY = 0;
        }
        if (SnakeX === 0) {
            SnakeX = 29;
        } else if (SnakeX === 29) {
            SnakeX = 0;
        }
    }

    if (SnakeX === FruitX && SnakeY === FruitY) {
        CreateFruit();
        Beginning = false;
        length += growth;
        if (interval >= 30) {
            interval -= 10;
            clearInterval(Inter);
            Inter = setInterval(GameLoop, interval);
        }
        Score++;
        document.getElementById("score").innerHTML = '' + Score;
    }

    for (let i = 0; i < length; i++) {
        if (SnakeX === TailX[i] && SnakeY === TailY[i]) {
            GameOver = true;
            Reset();
            document.getElementById("last-score").innerHTML = "Last score : " + Score;
            break;
        }
    }

    if (Score > BestScore) {
        BestScore = Score;
        document.getElementById("best-score").innerHTML = 'Best score : ' + BestScore;
    }
}

function UpdateTail() {
    for (let i = length; i > 0; i--) {
        TailX[i] = TailX[i - 1];
        TailY[i] = TailY[i - 1];
    }
    TailX[0] = SnakeX;
    TailY[0] = SnakeY;
}

Run();
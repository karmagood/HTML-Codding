//settings
let SnakeX = 2;
let SnakeY = 2;
let Height = 30;
let Width = 30;
let interval = 100;

//game variables
let length = 0;
let TailX = [SnakeX];
let TailY = [SnakeY];
let FruitX;
let FruitY;
let Running = false;
let GameOver = false;
let direction = 2;// up = 8 , down = 2, right = 6, left = 4
let inter;
let Score = 0;

function Run() {
    Init();
    inter = setInterval(GameLoop, interval);

}

function Init() {
    CreateMap();
    CreateSnake();
    CreateFruit();
}

function CreateMap() {
    document.write("<table name='table'>");
    for (let y = 0; y < Height; y++) {
        document.write("<tr>");
        for (let x = 0; x < Width; x++) {
            if (x === 0 || x === Width - 1 || y === 0 || y === Height - 1) {
                document.write("<td class='wall' id='" + x + "-" + y + "'></td>");
            } else {
                document.write("<td class='blank' id='" + x + "-" + y + "'></td>");
            }
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

function CreateSnake() {
    Set(SnakeX, SnakeY, "snake");
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
            Set(FruitX,FruitY,"fruit");
            break;
        }

    }
}

window.addEventListener("keypress", function key() {
   let key = event.keyCode;
   console.log(key);
   if(!Running){
       Running = true;
   }
   switch (key){
       case 65:
       case 97:
           direction = 4;
            break;
       case 87:
       case 119:
           direction = 8;
           break;
       case 68:
       case 100:
           direction = 6;
           break;
       case 83:
       case 115:
           direction = 2;
           break;
       case 32:
           Running = false;
           break;
   }
});

function GameLoop() {
    if (Running && !GameOver){
        Update();
    }
    else if (GameOver){
        clearInterval(inter);
    }
}

function Update() {
    Set(FruitX, FruitY, "fruit");
    UpdateTail();
    Set(TailX[length],TailY[length],"blank");
    switch (direction){
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
    if (GetType(SnakeX, SnakeY) === "wall"){
        GameOver = true;
    }
    Set(SnakeX,SnakeY,"snake");
    if (SnakeX === FruitX && SnakeY === FruitY){
        CreateFruit();
        length += 4;
        Score++;
        document.getElementById("score").innerHTML = '' + Score;
    }

    for (let i = 0; i < length ; i++){
        if (SnakeX === TailX[i] && SnakeY === TailY[i]){
            GameOver = true;
            break;
        }
    }

}

function UpdateTail() {
    for (let i = length; i > 0; i--){
        TailX[i] = TailX[i - 1];
        TailY[i] = TailY[i - 1];
    }
    TailX[0] = SnakeX;
    TailY[0] = SnakeY;
}

Run();
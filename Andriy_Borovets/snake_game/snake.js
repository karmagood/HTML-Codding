canvas_size= document.getElementById("gc").clientHeight;  // get snake_game canvas size
   // document.getElementById("gc").clientWidth = canvas_size.toString()+'px'
gs= 30;  // grid size = snake unit size = rabbit_size

sx=sy=10;

tblocks=canvas_size/gs;
rabbit_x=rabbit_y=Math.floor(Math.random()*tblocks);
x_velocity=y_velocity=0;
snake=[];

paused = 0;
snake_len = 1;
var last_score = 0;


//keys_ids
ESCAPE_KEY = 27;
RIGHT_KEY = 39;
LEFT_KEY = 37;
UP_KEY = 38;
DOWN_KEY = 40;
function myfun(){
    return null;
}


function snake_game() {


    if(paused === 1){
        document.querySelector('.score').innerHTML = snake_len  + "<br>paused";
        document.querySelector('#last_score').innerHTML = last_score;
        // ctx.fillStyle="lime";
        //ctx.fillRect(200,200,-100,-100);
        return ;
    }


    sx+=x_velocity;
    sy+=y_velocity;
    if(sx<0) {
        sx= tblocks-1;
    }
    if(sx>tblocks-1) {
        sx= 0;
    }
    if(sy<0) {
        sy= tblocks-1;
    }
    if(sy>tblocks-1) {
        sy= 0;
    }
    ctx.fillStyle="white";
    ctx.fillRect(0,0,canv.width,canv.height);

    ctx.fillStyle="lime";
    for(var i=0; i<snake.length; i++) {
        if( i === snake.length -1){
            ctx.fillStyle="green";
        }
        ctx.fillRect(snake[i].x*gs,snake[i].y*gs,gs-2,gs-2);
        if(snake[i].x===sx && snake[i].y===sy) {
            if(snake_len > 1 ){
                last_score = snake_len;

            }
            sx=sy=10;
            x_velocity = 0;
            y_velocity = 0;
            document.querySelector('#last_score').innerHTML = last_score;
            snake_len = 1;
            document.querySelector('.score').innerHTML = snake_len ;
            document.querySelector('#last_score').innerHTML = last_score;

        }
    }

    snake.push({x:sx,y:sy});

    while(snake.length>snake_len) {
        snake.shift();
    }

    if(rabbit_y===sy && rabbit_x===sx ) {
        snake_len++;
        document.querySelector('.score').innerHTML = snake_len ;

        rabbit_x=Math.floor(Math.random()*tblocks);
        rabbit_y=Math.floor(Math.random()*tblocks);
        if(rabbit_x === sx && rabbit_y === sy){
            rabbit_x=Math.floor(Math.random()*tblocks);
            rabbit_y=Math.floor(Math.random()*tblocks);
        }

    }


    base_image = new Image();
    base_image.src = 'rabbit.gif';
    //base_image.height = gs-2;
    //base_image.width = gs-2;
    ctx.drawImage(base_image, rabbit_x*gs,rabbit_y*gs,gs-2,gs-2);


    /*
    ctx.beginPath();
    ctx.arc(rabbit_x*gs+gs/2, rabbit_y*gs+gs/2, gs/2 - 2, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.lineWidth = 0;
    ctx.strokeStyle = 'orange';
    ctx.stroke();
    */

    //ctx.fillRect(rabbit_x*gs,rabbit_y*gs,gs-2,gs-2);


}

function keyPush(evt) {
                                            //alert("kode: "+evt.keyCode);
    if (evt.keyCode !== ESCAPE_KEY){
        paused = 0;
    }
    //alert("key presed: "+evt.keyCode);
    switch(evt.keyCode) {
        case LEFT_KEY:
            if(x_velocity!==1){
                x_velocity=-1;
            }
            y_velocity=0;
            break;
        case UP_KEY:
            if(y_velocity!==1){
                y_velocity=-1;
            }
            x_velocity=0;
            break;
        case RIGHT_KEY:
            if(x_velocity!==-1){
                x_velocity=1;
            }
            y_velocity=0;
            break;
        case DOWN_KEY:
            if(y_velocity!==-1)
                y_velocity=1;
            x_velocity=0;
            break;
        case ESCAPE_KEY:
            paused = 1;
            break;
    }
}

function toggle(butt) {
    el = document.getElementById("overlay");
    el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
    if(butt.id ==="fast"){
        setInterval(snake_game,50);
    }
    if(butt.id ==="medium"){
        setInterval(snake_game,150);
    }
    if(butt.id ==="slow"){
        setInterval(snake_game,300);
    }
}

window.onload=function() {
    document.querySelector('.score').innerHTML = snake_len;
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    toggle();
};

let score = document.querySelector(".score");
score.innerHTML = "score: 0";



let game = document.querySelector(".game");
for(let i = 0;i<16;i++){
    let cell = document.createElement("div");
    cell.classList.add("game__cell");
    game.appendChild(cell)
}
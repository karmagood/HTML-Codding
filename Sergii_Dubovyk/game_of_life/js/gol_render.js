let game_field;
let running = false;

$(window).on('load', () => {
});

$(document).ready(() => {
    $("#generate-cells").click(() => {
        game_field = generateField(15);
        game_field = randomFillField(game_field, 0.2);
        renderField(game_field, document.getElementById('game-grid'));
    });

    $("#stop-simulation").click(() => {
        running = false;
    });

    $("#start-simulation").click(() => {
        running = true;
        renderSteps(game_field, 10);
    });

});


const renderField = (field, grid) => {
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    field.forEach((row) => {
        row.forEach((cell) => {
        let newCell = document.createElement('div');
    newCell.className = 'game-grid__cell';
    if (cell === 1){
        newCell.className = 'game-grid__cell game-grid__cell_alive';
    }
    grid.appendChild(newCell);
    })
    });
};

const renderSteps = (field, steps) => {
    if (running === false) return;

    setTimeout(() => {
        field = simulateNIterations(field, 1);
    renderField(field, document.getElementById('game-grid'));
    console.log(steps);
    renderSteps(field, steps - 1);
}, 500);
};

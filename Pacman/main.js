document.addEventListener('DOMContentLoaded', appStart);

const game_width = 600,
    game_height = 600;
let canvas,
    ctx,
    pacman,
    ball,
    game,
    wall,
    collision,
    lastTime = 0,
    walls,
    startButton,
    timeBoard,
    food,
    drawfood,
    timeStart;


function appStart() {
    canvas = document.querySelector('.gameArea');
    ctx = canvas.getContext('2d')
    game = new Game(game_width, game_height);
    game.startGame()
    // loadImage()
    gameLoop()
}

function gameLoop() {
    ctx.clearRect(0, 0, game_width, game_height)
    game.update();
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}
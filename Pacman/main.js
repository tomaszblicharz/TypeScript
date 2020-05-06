document.addEventListener('DOMContentLoaded', appStart);

const game_width = 700,
    game_height = 600;
let canvas,
    ctx,
    pacman,
    ball,
    game,
    wall,
    collision,
    lastTime = 0,
    walls = [],
    startButton,
    timeBoard;

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

// function loadImage() {

//     const image = new Image()
//     image.src = "background.jpg"
//     image.addEventListener('load', () => {
//         ctx.drawImage(image, 0, 0, ctx.canvas.game_width, ctx.canvas.game_height)
//     })
// }
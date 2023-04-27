import Game from '/src/game.js'

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let canvas = document.getElementById('gameScreen');
canvas.width = GAME_WIDTH
canvas.height = GAME_HEIGHT


let ctx = canvas.getContext('2d');


let game = new Game(GAME_WIDTH, GAME_HEIGHT);

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);


let lastTime = 0;

//images
let imgBall = document.getElementById('img_ball'); 

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

